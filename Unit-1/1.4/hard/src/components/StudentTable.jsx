import { Link } from "react-router-dom";
import { formatDate, getGrade, isPassing } from "../utils/studentUtils";

function StudentTable({ students, onDelete }) {
  if (!students.length) {
    return (
      <div className="empty-state">
        <h3>No students found</h3>
        <p>Try changing filters or add a new student profile.</p>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Result</th>
            <th>Enrolled</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const pass = isPassing(student.marks);

            return (
              <tr key={student.id}>
                <td>
                  <p className="name-cell">{student.name}</p>
                  <p className="meta-cell">{student.email}</p>
                </td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>{student.marks}</td>
                <td>{getGrade(student.marks)}</td>
                <td>
                  <span className={pass ? "pill pass" : "pill fail"}>{pass ? "Pass" : "Fail"}</span>
                </td>
                <td>{formatDate(student.enrolledOn)}</td>
                <td>
                  <div className="actions">
                    <Link className="btn ghost" to={`/students/${student.id}`}>
                      View
                    </Link>
                    <Link className="btn ghost" to={`/students/${student.id}/edit`}>
                      Edit
                    </Link>
                    <button type="button" className="btn danger" onClick={() => onDelete(student.id, student.name)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
