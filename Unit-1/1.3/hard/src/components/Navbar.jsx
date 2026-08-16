import { NavLink, Link } from "react-router-dom";

function Navbar({ isAuthenticated, onLogout }) {
  return (
    <header className="nav-shell">
      <div className="nav-bar">
        <Link to="/dashboard" className="brand-link">
          Admin Portal
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/users" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Users
          </NavLink>
          <NavLink to="/dashboard/reports" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Reports
          </NavLink>
          <NavLink to="/dashboard/settings" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Settings
          </NavLink>
          {isAuthenticated ? (
            <button type="button" className="nav-button" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;