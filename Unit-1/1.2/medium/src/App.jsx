
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData);
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.icon}>🎓</div>
          <h1 style={styles.title}>Student Registration</h1>
          <p style={styles.subtitle}>
            Enter your details to register as a student
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="">Select your course</option>
              <option value="Computer Science Engineering">
                Computer Science Engineering
              </option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Electronics Engineering">
                Electronics Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">
                Civil Engineering
              </option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              min="16"
              max="60"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Register Now →
          </button>
        </form>

        {/* Submitted Data */}
        {submittedData && (
          <div style={styles.result}>
            <div style={styles.successIcon}>✓</div>

            <h2 style={styles.resultTitle}>Registration Successful!</h2>

            <p style={styles.resultSubtitle}>
              Your details have been submitted successfully.
            </p>

            <div style={styles.details}>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>👤 Name</span>
                <span style={styles.detailValue}>
                  {submittedData.name}
                </span>
              </div>

              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>✉️ Email</span>
                <span style={styles.detailValue}>
                  {submittedData.email}
                </span>
              </div>

              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>📚 Course</span>
                <span style={styles.detailValue}>
                  {submittedData.course}
                </span>
              </div>

              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>🎂 Age</span>
                <span style={styles.detailValue}>
                  {submittedData.age}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <p style={styles.footer}>
        React Student Registration • Powered by useState
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
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "550px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    boxSizing: "border-box",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  icon: {
    fontSize: "50px",
    marginBottom: "10px",
  },

  title: {
    margin: "0",
    color: "#2d3748",
    fontSize: "30px",
  },

  subtitle: {
    color: "#718096",
    marginTop: "10px",
    fontSize: "15px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    color: "#2d3748",
    fontSize: "14px",
    fontWeight: "bold",
  },

  input: {
    padding: "14px 16px",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#f8fafc",
    boxSizing: "border-box",
    width: "100%",
  },

  button: {
    marginTop: "5px",
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
  },

  result: {
    marginTop: "35px",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "#f0fff4",
    border: "2px solid #9ae6b4",
    textAlign: "center",
  },

  successIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#48bb78",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
    fontSize: "28px",
    fontWeight: "bold",
  },

  resultTitle: {
    color: "#276749",
    margin: "0",
    fontSize: "22px",
  },

  resultSubtitle: {
    color: "#4a5568",
    fontSize: "14px",
    marginBottom: "20px",
  },

  details: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px 15px",
    textAlign: "left",
  },

  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    padding: "12px 5px",
    borderBottom: "1px solid #edf2f7",
  },

  detailLabel: {
    color: "#718096",
    fontWeight: "bold",
    fontSize: "14px",
  },

  detailValue: {
    color: "#2d3748",
    fontSize: "14px",
    textAlign: "right",
    wordBreak: "break-word",
  },

  footer: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "13px",
    marginTop: "20px",
  },
};

export default App;
