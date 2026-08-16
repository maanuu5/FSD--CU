import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-card">
      <h1>404 - Page Not Found</h1>
      <p className="simple-copy">The page you tried to open does not exist.</p>
      <Link to="/dashboard" className="primary-button">
        Go to Dashboard
      </Link>
    </section>
  );
}

export default NotFound;