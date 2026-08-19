import { NavLink } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Unit 1.4 Hard</p>
          <h1>Student Management System</h1>
        </div>

        <nav className="topbar-nav" aria-label="Main navigation">
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Dashboard
          </NavLink>
          <NavLink to="/students" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Students
          </NavLink>
          <NavLink to="/students/new" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Register
          </NavLink>
        </nav>
      </header>

      <main className="content">{children}</main>
    </div>
  );
}

export default AppLayout;
