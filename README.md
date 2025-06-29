# Truck Load Balancing Tool

## Overview
This project implements a truck load balancing solution using both heuristic and knapsack-based algorithms to optimize carton placement. The backend is built with Flask, and the frontend uses React.

---

## Project Structure

This project focuses on the core functionalities provided by the following main files:

-   **server.py**: Flask backend serving API endpoints, processing carton data, running heuristic and knapsack algorithms, and returning carton arrangement results as JSON.
-   **client/src/app.js**: Main React entry point that initializes the app, fetches data (like available carton types) from the backend, renders the primary UI component, and passes API results to it.
-   **client/src/CartonSelector.js**: React component for selecting carton types and quantities, sending selections to backend API endpoints, receiving load balancing results, and rendering them in a visual grid.

---

## Setup and Installation

### Backend (Flask)

1.  Navigate to the project root.
2.  Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3.  Run the server:

    ```bash
    python server.py
    ```

    Server will start on `localhost:5000`.

### Frontend (React)

1.  Navigate to the `client` directory.
2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the React app:

    ```bash
    npm start
    ```

    App runs on `localhost:3000` and forwards API requests to `localhost:5000`.

---

## Frontend Proxy Configuration

In `client/package.json`, we have:

"proxy": "http://localhost:5000"

## Workflow

1. User selects carton options in CartonSelector.js.

2. app.js makes API call to server.py via relative URL (thanks to proxy configuration).

3. server.py runs the heuristic and knapsack algorithm logic and returns a JSON response.

4. CartonSelector.js updates the UI with optimized arrangement and carton counts.

5. User views visualized truck load results.

## Algorithms and Logic
- Heuristic approach: Evaluates the current state using carton stack height and unused space in width.

- Knapsack approach: Uses dynamic programming to find tighter fills without real-time adjustments, accounting for ±2% carton size variation.

- Heuristic correction layer: Fine-tunes the knapsack result without backtracking.

- Refer to medium article for full pseudocode, test cases, and detailed comparative analysis. is this definition sufficient stating the relvance of each file if ypu disgaree   plese change accprdinly
