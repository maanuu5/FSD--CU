import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="panel not-found">
      <p className="eyebrow">404</p>
      <h2>Page Not Found</h2>
      <p className="muted">The route you requested does not exist in this app.</p>
      <Link className="btn primary" to="/dashboard">
        Go to Dashboard
      </Link>
    </section>
  );
}

export default NotFoundPage;
