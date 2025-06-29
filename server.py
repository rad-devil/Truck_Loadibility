from flask import Flask, jsonify, request
from flask_cors import CORS
from collections import defaultdict
import math

# ======================== FLASK SETUP ========================
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (frontend-backend communication)

# ======================== GLOBALS ========================
# These globals hold stack and packing state
stack_list = []         # Main list of usable stacks
overflow_stack_list = [] # Additional stacks to be used if space remains
cartons_exhausted = 0   # Counter for fully used carton types
used_stacks = 0         # Tracks number of stacks used
space_remaining = False # Flag for leftover space in the truck
final_biscuit_count = defaultdict(int)  # Biscuit type → quantity loaded
cartons_used = defaultdict(int)         # Carton index → quantity used

# ======================== UTILITY FUNCTIONS ========================

def round_half_up(n: float) -> int:
    """Rounds a number to nearest integer, rounding .5 upward."""
    decimal = n - math.floor(n)
    return math.ceil(n) if decimal == 0.5 else round(n)

# ======================== STACKING ALGORITHM ========================

def optimized_stack(cartons, truck_height=2.642, truck_volume=87000000):
    """Greedily stack cartons based on their heights, while respecting height and volume limits."""
    max_stack_height = round_half_up(truck_height * 100)  # Convert to cm
    total_volume = 0
    global space_remaining, cartons_exhausted

    # Determine max number of times each carton can be used in a stack
    max_repeat = max(
        round_half_up(max_stack_height / carton["height"]) for carton in cartons
    )

    while total_volume < truck_volume:
        if cartons_exhausted >= len(cartons):
            space_remaining = True

        num_cartons = len(cartons)
        dp = [[defaultdict(int) for _ in range(max_stack_height + 1)] for _ in range(num_cartons)]

        # Base Case: First carton
        first = cartons[0]
        first_height = round_half_up(first["height"] * 100)
        max_quantity = 5 if space_remaining else min(max_repeat, first["quantity"])
        q = 0
        for h in range(max_stack_height + 1):
            while q <= max_quantity and first_height * (q + 1) <= h:
                q += 1
            if q > 0:
                dp[0][h] = {0: q}

        # DP Step: Remaining cartons
        for i in range(1, num_cartons):
            carton = cartons[i]
            height = round_half_up(carton["height"] * 100)
            max_quantity = 5 if space_remaining else min(max_repeat, carton["quantity"])
            for h in range(max_stack_height + 1):
                dp[i][h] = dp[i - 1][h].copy()
                for q in range(1, max_quantity + 1):
                    stacked_height = h - (height * q)
                    if stacked_height >= 0:
                        new_height = sum_stack_height(dp[i - 1][stacked_height], cartons) + (height * q)
                        current_height = sum_stack_height(dp[i - 1][h], cartons)
                        if new_height > current_height and new_height <= h:
                            dp[i][h] = dp[i - 1][stacked_height].copy()
                            dp[i][h][i] = dp[i][h].get(i, 0) + q

        # Use the DP result to update carton usage and track stacks
        max_len, max_wid, volume, count = update_carton_usage(dp[num_cartons - 1][max_stack_height], cartons)

        if total_volume + volume > truck_volume:
            break

        for _ in range(count):
            total_volume += volume
            named_stack = resolve_biscuit_names(dp[num_cartons - 1][max_stack_height], cartons)
            stack_list.append((named_stack, max_len, max_wid))

        # If cartons are exhausted, fill remaining space with repeated stack
        if space_remaining:
            while total_volume < truck_volume:
                named_stack = resolve_biscuit_names(dp[num_cartons - 1][max_stack_height], cartons)
                overflow_stack_list.append((named_stack, max_len, max_wid))
                total_volume += volume
            break

def resolve_biscuit_names(stack_map, cartons):
    """Convert carton indices into biscuit type names with quantity."""
    return defaultdict(int, {cartons[i]["biscuit_type"]: stack_map[i] for i in stack_map})

def update_carton_usage(stack_config, cartons):
    """Updates remaining carton quantities and tracks used volume, height, and width."""
    global cartons_used, cartons_exhausted, space_remaining
    total_volume = 0
    max_length = max_width = 0
    count = 0
    flagged = False
    updated_once = False

    while True:
        for i in stack_config:
            carton = cartons[i]
            width = round_half_up(carton["width"] * 100)
            length = round_half_up(carton["length"] * 100)
            volume = round_half_up(carton["volume"] * 1_000_000)
            quantity = stack_config[i]

            if not updated_once:
                total_volume += volume * quantity
            carton["quantity"] -= quantity
            cartons_used[i] += quantity
            max_width = max(max_width, width)
            max_length = max(max_length, length)
            if carton["quantity"] <= 0:
                flagged = True
                cartons_exhausted += 1

        updated_once = True
        count += 1
        if flagged or space_remaining:
            break

    return max_length, max_width, total_volume, count

def sum_stack_height(stack_map, cartons):
    """Calculates cumulative stack height."""
    height = 0
    for i in stack_map:
        if i < len(cartons):
            height += stack_map[i] * round_half_up(cartons[i]["height"] * 100)
    return height

# ======================== ROW ARRANGEMENT ========================

def generate_rows(max_width=2.286, max_length=12.13):
    """Packs stacks row-by-row into a truck with limited width and length."""
    global stack_list, overflow_stack_list, final_biscuit_count
    max_width = round_half_up(max_width * 100)
    max_length = round_half_up(max_length * 100)

    total_length = 0
    row_layout = []
    trigger_overflow = False
    prev_row_width = 0

    while True:
        if not stack_list:
            trigger_overflow = True
            prev_row_width = total_width
            stack_list = overflow_stack_list

        num_stacks = len(stack_list)
        dp = [[defaultdict(int) for _ in range(max_width + 1)] for _ in range(num_stacks + 1)]

        # DP Base Case
        first_stack = stack_list[0]
        for w in range(max_width + 1):
            dp[0][w][0] = (first_stack[1], first_stack[2])

        for i in range(1, num_stacks):
            curr = stack_list[i]
            if curr != -1:
                for w in range(max_width + 1):
                    dp[i][w] = dp[i - 1][w].copy()
                    if w - curr[2] >= 0:
                        prev_val = total_stack_width(dp[i][w].values())
                        new_val = total_stack_width(dp[i - 1][w - curr[2]].values()) + curr[2]
                        if new_val > prev_val and new_val <= w:
                            dp[i][w] = dp[i - 1][w - curr[2]].copy()
                            dp[i][w][i] = (curr[1], curr[2])

        total_width = total_stack_width(dp[num_stacks - 1][max_width].values())
        max_row_length = max([length for length, _ in dp[num_stacks - 1][max_width].values()] or [0])
        total_length += max_row_length

        if total_length < max_length:
            if trigger_overflow:
                trigger_overflow = False
                added_stack_idx = next(iter(dp[num_stacks - 1][max_width]), None)
                if added_stack_idx is not None:
                    while prev_row_width + stack_list[added_stack_idx][2] < max_width:
                        prev_row_width += stack_list[added_stack_idx][2]
                        last_row = row_layout.pop()
                        last_row.append(stack_list[added_stack_idx][0])
                        row_layout.append(last_row)

            row = build_row(dp[num_stacks - 1][max_width])
            row_layout.append(row)
        else:
            break

    return row_layout

def total_stack_width(stack_sizes):
    """Sums the widths of stacks."""
    return sum(width for _, width in stack_sizes)

def build_row(stack_indices):
    """Removes stacks used in a row and updates the final biscuit count."""
    global stack_list, final_biscuit_count
    row = []
    to_remove = []
    for i in stack_indices:
        to_remove.append(stack_list[i])
        row.append(stack_list[i][0])
        for key in stack_list[i][0]:
            final_biscuit_count[key] += stack_list[i][0][key]
    for item in to_remove:
        stack_list.remove(item)
    return row

# ======================== API ENDPOINT ========================

@app.route("/loadibility", methods=["POST"])
def loadibility():
    """API to handle carton packing into truck."""
    try:
        data = request.get_json()
        cartons = data.get("cartons", [])
        if not cartons:
            return jsonify({"error": "No cartons provided"}), 400

        cartons_copy = [c.copy() for c in cartons]
        optimized_stack(cartons_copy)
        row_result = generate_rows()

        return jsonify([final_biscuit_count, row_result])
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ======================== RUN ========================
if __name__ == '__main__':
    app.run(port=5000)
