import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav-shell">
      <div className="nav-bar">
        <Link to="/" className="brand-link">
          Experiment 1.3 
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;