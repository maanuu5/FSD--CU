import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav-shell">
      <div className="nav-bar">
        <Link to="/students" className="brand-link">
          Student Directory
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/students" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Student List
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Register Student
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;