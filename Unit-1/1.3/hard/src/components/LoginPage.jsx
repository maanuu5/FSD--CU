import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage({ onLogin, isAuthenticated }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username.trim() && credentials.password.trim()) {
      onLogin();
      navigate("/dashboard");
    }
  };

  return (
    <section className="page-card">
      <h1>Login</h1>
      <p className="simple-copy">Enter any username and password to access the protected dashboard routes.</p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(event) => setCredentials({ ...credentials, username: event.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
        />
        <button type="submit" className="primary-button">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default LoginPage;