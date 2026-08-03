
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.icon}>🔢</div>

        <h1 style={styles.title}>Counter App</h1>

        <p style={styles.subtitle}>
          Manage your counter using React useState
        </p>

        {/* Counter Display */}
        <div
          style={{
            ...styles.counterBox,
            borderColor: count < 0 ? "#ef4444" : "#22c55e",
          }}
        >
          <p style={styles.counterLabel}>Current Count</p>

          <h2
            style={{
              ...styles.count,
              color: count < 0 ? "#ef4444" : "#22c55e",
            }}
          >
            {count}
          </h2>

          <p
            style={{
              ...styles.status,
              color: count < 0 ? "#ef4444" : "#22c55e",
            }}
          >
            {count < 0 ? "Negative Value" : "Positive Value"}
          </p>
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button onClick={increment} style={styles.incrementButton}>
            + Increment
          </button>

          <button onClick={decrement} style={styles.decrementButton}>
            − Decrement
          </button>

          <button onClick={reset} style={styles.resetButton}>
            ↻ Reset
          </button>
        </div>

        {/* Instructions */}
        <div style={styles.infoBox}>
          <p style={styles.infoText}>
            💡 Click <strong>Increment</strong> to increase the count.
          </p>

          <p style={styles.infoText}>
            Click <strong>Decrement</strong> to decrease the count.
          </p>

          <p style={styles.infoText}>
            Click <strong>Reset</strong> to return the count to zero.
          </p>
        </div>
      </div>

      <p style={styles.footer}>
        React Counter App • Built using useState
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "white",
    borderRadius: "25px",
    padding: "40px",
    textAlign: "center",
    boxSizing: "border-box",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
  },

  icon: {
    fontSize: "50px",
    marginBottom: "10px",
  },

  title: {
    margin: "0",
    fontSize: "32px",
    color: "#2d3748",
  },

  subtitle: {
    color: "#718096",
    fontSize: "15px",
    marginBottom: "30px",
  },

  counterBox: {
    border: "4px solid",
    borderRadius: "20px",
    padding: "25px",
    marginBottom: "30px",
    backgroundColor: "#f8fafc",
    transition: "0.3s",
  },

  counterLabel: {
    color: "#718096",
    fontSize: "15px",
    margin: "0 0 10px",
  },

  count: {
    fontSize: "70px",
    margin: "5px 0",
    fontWeight: "bold",
    transition: "0.3s",
  },

  status: {
    fontWeight: "bold",
    margin: "5px 0 0",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "25px",
  },

  incrementButton: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#22c55e",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  decrementButton: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#ef4444",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  resetButton: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#667eea",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  infoBox: {
    backgroundColor: "#f7fafc",
    borderRadius: "15px",
    padding: "15px",
    textAlign: "left",
  },

  infoText: {
    color: "#4a5568",
    fontSize: "13px",
    margin: "8px 0",
  },

  footer: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "13px",
    marginTop: "20px",
  },
};

export default App;

