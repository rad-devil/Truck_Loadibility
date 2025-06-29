import React, { useState, useEffect } from "react";
import CartonSelector from "./CartonSelector";

// Modal styles
const styles = `
  .modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: white;
    padding: 2rem;
    width: 90%;
    max-width: 95vw;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 12px;
    position: relative;
  }

  .close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .summary ul {
    padding-left: 1.2rem;
  }

  .grid-view {
    margin-top: 2rem;
  }

  .row {
    display: flex;
    gap: 0.4rem;
    overflow-x: auto;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .block {
    background-color: #fdd835;
    color: #333;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    border: 1px solid #fbc02d;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    font-size: 0.75rem;
    display: inline-block;
    max-width: 200px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }

  .row-separator {
    height: 1px;
    background: gray;
    margin-bottom: 1rem;
  }
`;

// Modal component
const Modal = ({ isOpen, onClose, summary = {}, grid = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>📦 Truck Load Visualization</h2>

        <div className="summary">
          <h3>🧾 Carton Summary</h3>
          <ul>
            {Object.entries(summary).map(([type, qty]) => (
              <li key={type}>{type}: {qty} cartons</li>
            ))}
          </ul>
        </div>

        <div className="grid-view">
          {Array.isArray(grid) && grid.length > 0 ? (
            grid.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <div className="row">
                  {Array.isArray(row) && row.map((stack, stackIndex) => (
                    <div className="block" key={stackIndex}>
                      {stack && typeof stack === 'object' && Object.entries(stack).map(([type, qty], i) => (
                        <div key={i}>{type}: {qty}</div>
                      ))}
                    </div>
                  ))}
                </div>
                {rowIndex < grid.length - 1 && (
                  <div className="row-separator" />
                )}
              </React.Fragment>
            ))
          ) : (
            <p>No layout data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [selectedCartons, setSelectedCartons] = useState({});
  const [rows, setRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCartonSelection = (cartons) => {
    setSelectedCartons(cartons);

    if (Object.keys(cartons).length === 0) {
      setRows([]);
      return;
    }

    setLoading(true);

    const cartonArray = Object.entries(cartons).map(([biscuit_type, data]) => ({
      biscuit_type,
      quantity: data?.quantity ?? 0,
      length: data?.length ?? 0,
      width: data?.width ?? 0,
      height: data?.height ?? 0,
      volume: data?.volume ?? 0
    }));

    fetch("http://localhost:5000/loadibility", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartons: cartonArray }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length < 2) {
          console.warn("Unexpected backend format:", data);
          setRows([]);
        } else {
          setRows(data);
          setIsOpen(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching loadability:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  const summary = Array.isArray(rows) && rows.length > 0 ? rows[0] : {};
  const grid = Array.isArray(rows) && rows.length > 1 ? rows[1] : [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-xl font-bold mb-4">🚛 Truck Load Balancing</h1>

      <CartonSelector onSelectionChange={handleCartonSelection} />

      {loading ? (
        <p className="mt-4">⏳ Loading layout...</p>
      ) : (
        rows.length > 0 && (
          <button
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsOpen(true)}
          >
            Show Layout
          </button>
        )
      )}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        summary={summary}
        grid={grid}
      />
    </div>
  );
}

export default App;
