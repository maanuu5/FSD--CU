import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";
import { useStudents } from "../context/StudentContext";
import { isPassing } from "../utils/studentUtils";

function StudentsPage() {
  const { students, deleteStudent } = useStudents();
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("ALL");
  const [year, setYear] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [sortBy, setSortBy] = useState("RECENT");

  const departments = useMemo(
    () => [...new Set(students.map((student) => student.department))].sort(),
    [students],
  );

  const years = useMemo(() => [...new Set(students.map((student) => student.year))], [students]);

  const visibleStudents = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return students
      .filter((student) => {
        if (!term) return true;

        return (
          student.name.toLowerCase().includes(term) ||
          student.email.toLowerCase().includes(term) ||
          student.department.toLowerCase().includes(term)
        );
      })
      .filter((student) => (department === "ALL" ? true : student.department === department))
      .filter((student) => (year === "ALL" ? true : student.year === year))
      .filter((student) => {
        if (status === "ALL") return true;
        if (status === "PASS") return isPassing(student.marks);
        return !isPassing(student.marks);
      })
      .sort((a, b) => {
        if (sortBy === "NAME_ASC") return a.name.localeCompare(b.name);
        if (sortBy === "NAME_DESC") return b.name.localeCompare(a.name);
        if (sortBy === "MARKS_ASC") return Number(a.marks) - Number(b.marks);
        if (sortBy === "MARKS_DESC") return Number(b.marks) - Number(a.marks);
        return new Date(b.enrolledOn).getTime() - new Date(a.enrolledOn).getTime();
      });
  }, [students, searchTerm, department, year, status, sortBy]);

  function handleDelete(studentId, studentName) {
    const shouldDelete = window.confirm(`Delete ${studentName}'s record? This action cannot be undone.`);

    if (shouldDelete) {
      deleteStudent(studentId);
    }
  }

  return (
    <section className="panel">
      <div className="section-head">
        <div>
          <h2>Student Directory</h2>
          <p className="muted">Search, filter, and maintain complete student records.</p>
        </div>

        <Link className="btn primary" to="/students/new">
          + Add Student
        </Link>
      </div>

      <StudentFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        department={department}
        onDepartmentChange={setDepartment}
        year={year}
        onYearChange={setYear}
        status={status}
        onStatusChange={setStatus}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        departments={departments}
        years={years}
      />

      <StudentTable students={visibleStudents} onDelete={handleDelete} />
    </section>
  );
}

export default StudentsPage;
