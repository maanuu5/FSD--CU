import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { useStudents } from "../context/StudentContext";
import { getGrade, isPassing } from "../utils/studentUtils";

function DashboardPage() {
  const { students } = useStudents();

  const totalStudents = students.length;
  const passingCount = students.filter((student) => isPassing(student.marks)).length;
  const failingCount = totalStudents - passingCount;

  const averageMarks =
    totalStudents === 0
      ? 0
      : Math.round(students.reduce((total, student) => total + Number(student.marks), 0) / totalStudents);

  const topper = students
    .slice()
    .sort((a, b) => Number(b.marks) - Number(a.marks))[0];

  return (
    <section className="dashboard-grid">
      <header className="hero panel">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Academic Operations Dashboard</h2>
          <p className="muted">
            Track active students, performance split, and recent record updates in one place.
          </p>
        </div>
        <Link className="btn primary" to="/students/new">
          Register New Student
        </Link>
      </header>

      <div className="stats-grid">
        <StatCard label="Total Students" value={totalStudents} accent="accent-blue" />
        <StatCard
          label="Average Marks"
          value={`${averageMarks}%`}
          accent="accent-orange"
          hint="Based on all current student records"
        />
        <StatCard label="Pass" value={passingCount} accent="accent-green" />
        <StatCard label="Fail" value={failingCount} accent="accent-red" />
      </div>

      <section className="panel topper-card">
        <h3>Top Performer</h3>
        {topper ? (
          <div className="topper-body">
            <p className="topper-name">{topper.name}</p>
            <p className="muted">{topper.department}</p>
            <p className="topper-score">{topper.marks}%</p>
            <p className="muted">Grade {getGrade(topper.marks)}</p>
            <Link className="btn ghost" to={`/students/${topper.id}`}>
              View Profile
            </Link>
          </div>
        ) : (
          <p className="muted">No records available yet.</p>
        )}
      </section>

      <section className="panel insight-card">
        <h3>Quick Insights</h3>
        <ul>
          <li>Use the students tab to search and filter records instantly.</li>
          <li>Edit student profiles through dynamic routes for each ID.</li>
          <li>All updates are saved in local browser storage for persistence.</li>
        </ul>
      </section>
    </section>
  );
}

export default DashboardPage;
