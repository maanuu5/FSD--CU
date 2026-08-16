import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import StudentForm from "./components/StudentForm";
import { students } from "./data/students";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-frame">
        <Routes>
          <Route path="/" element={<Navigate to="/students" replace />} />
          <Route path="/students" element={<StudentList students={students} />} />
          <Route path="/students/:studentId" element={<StudentDetail students={students} />} />
          <Route path="/register" element={<StudentForm />} />
          <Route path="*" element={<Navigate to="/students" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;