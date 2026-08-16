import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <div className="sidebar-links">
          <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/users" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            Users
          </NavLink>
          <NavLink to="/dashboard/reports" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            Reports
          </NavLink>
          <NavLink to="/dashboard/settings" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}>
            Settings
          </NavLink>
        </div>
      </aside>

      <section className="page-card">
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;