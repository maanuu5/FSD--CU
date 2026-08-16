import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./components/DashboardLayout";
import Overview from "./components/Overview";
import Users from "./components/Users";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import "./App.css";

function ProtectedRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div className="app-shell">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <main className="page-frame">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} isAuthenticated={isAuthenticated} />} />

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<DashboardLayout onLogout={handleLogout} />}>
              <Route index element={<Overview />} />
              <Route path="users" element={<Users />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;