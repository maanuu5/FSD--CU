import { useState } from "react";
import "./App.css";
import StudentList from "./components/StudentList";

const studentData = [
  { id: 1, name: "Manu", rollNo: "CSE101", course: "Computer Science", year: "2nd Year", marks: 88 },
  { id: 2, name: "Shivam", rollNo: "ECE114", course: "Electronics", year: "1st Year", marks: 93 },
  { id: 3, name: "Sarvesh", rollNo: "ME202", course: "Mechanical", year: "3rd Year", marks: 76 },
  { id: 4, name: "Ayan", rollNo: "IT137", course: "Information Technology", year: "2nd Year", marks: 85 },
  { id: 5, name: "Priya", rollNo: "CIV098", course: "Civil", year: "1st Year", marks: 67 },
  { id: 6, name: "Ritika", rollNo: "CSE131", course: "Computer Science", year: "3rd Year", marks: 59 },
];

function getGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "E";
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [gradeFilter, setGradeFilter] = useState("ALL");

  const displayedStudents = [...studentData]
    .filter((student) => {
      const term = searchTerm.trim().toLowerCase();
      if (!term) return true;

      return (
        student.name.toLowerCase().includes(term) ||
        student.rollNo.toLowerCase().includes(term) ||
        student.course.toLowerCase().includes(term)
      );
    })
    .filter((student) => {
      if (gradeFilter === "ALL") return true;
      return getGrade(student.marks) === gradeFilter;
    })
    .sort((a, b) => {
      const result = a.name.localeCompare(b.name);
      return isAscending ? result : -result;
    });

  return (
    <main className="page">
      <section className="card">
        <h1>Student Records</h1>
        <p className="subtitle">
          Interactive search, name sorting, and grade filtering with React useState
        </p>

        <div className="controls">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name, roll number, or course"
            className="search-input"
          />

          <button
            type="button"
            onClick={() => setIsAscending((prev) => !prev)}
            className="sort-button"
          >
            Sort by Name: {isAscending ? "A to Z" : "Z to A"}
          </button>

          <select
            value={gradeFilter}
            onChange={(event) => setGradeFilter(event.target.value)}
            className="grade-select"
          >
            <option value="ALL">All Grades</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
            <option value="D">Grade D</option>
            <option value="E">Grade E</option>
          </select>
        </div>

        <StudentList students={displayedStudents} getGrade={getGrade} />
      </section>
    </main>
  );
}

export default App;
