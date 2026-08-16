import { Link } from "react-router-dom";

function StudentList({ students }) {
  return (
    <section className="page-card">
      <h1>Student List</h1>
      <p>Choose a student to view details.</p>

      <div className="student-list">
        {students.map((student) => (
          <article key={student.id} className="student-item">
            <div>
              <h2>{student.name}</h2>
              <p>{student.course}</p>
            </div>

            <Link to={`/students/${student.id}`} className="student-link">
              View Details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StudentList;