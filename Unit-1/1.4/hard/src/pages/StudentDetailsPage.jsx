import { Link, useParams } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import { formatDate, getGrade, isPassing } from "../utils/studentUtils";

function StudentDetailsPage() {
  const { studentId } = useParams();
  const { getStudentById } = useStudents();
  const student = getStudentById(studentId);

  if (!student) {
    return (
      <section className="panel">
        <h2>Student Not Found</h2>
        <p className="muted">The requested profile does not exist or may have been deleted.</p>
        <Link className="btn primary" to="/students">
          Back to Directory
        </Link>
      </section>
    );
  }

  return (
    <section className="panel details-panel">
      <div className="section-head">
        <div>
          <h2>{student.name}</h2>
          <p className="muted">Student ID: {student.id}</p>
        </div>

        <div className="details-actions">
          <Link className="btn ghost" to="/students">
            Back
          </Link>
          <Link className="btn primary" to={`/students/${student.id}/edit`}>
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="details-grid">
        <article className="detail-item">
          <h4>Email</h4>
          <p>{student.email}</p>
        </article>
        <article className="detail-item">
          <h4>Department</h4>
          <p>{student.department}</p>
        </article>
        <article className="detail-item">
          <h4>Year</h4>
          <p>{student.year}</p>
        </article>
        <article className="detail-item">
          <h4>Enrollment Date</h4>
          <p>{formatDate(student.enrolledOn)}</p>
        </article>
        <article className="detail-item">
          <h4>Marks</h4>
          <p>{student.marks}%</p>
        </article>
        <article className="detail-item">
          <h4>Grade</h4>
          <p>{getGrade(student.marks)}</p>
        </article>
        <article className="detail-item">
          <h4>Result</h4>
          <p>{isPassing(student.marks) ? "Pass" : "Fail"}</p>
        </article>
      </div>
    </section>
  );
}

export default StudentDetailsPage;
