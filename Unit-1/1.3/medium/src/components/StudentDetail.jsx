import { Link, useParams } from "react-router-dom";

function StudentDetail({ students }) {
  const { studentId } = useParams();
  const student = students.find((item) => item.id === Number(studentId));

  if (!student) {
    return (
      <section className="page-card">
        <h1>Student not found</h1>
        <p>The student you are looking for does not exist.</p>
        <Link to="/students" className="student-link">
          Back to list
        </Link>
      </section>
    );
  }

  return (
    <section className="page-card">
      <h1>Student Detail</h1>
      <p>Route parameter: {studentId}</p>

      <div className="detail-grid">
        <div className="detail-row">
          <strong>Name</strong>
          <span>{student.name}</span>
        </div>
        <div className="detail-row">
          <strong>Course</strong>
          <span>{student.course}</span>
        </div>
        <div className="detail-row">
          <strong>Batch</strong>
          <span>{student.batch}</span>
        </div>
        <div className="detail-row">
          <strong>Email</strong>
          <span>{student.email}</span>
        </div>
      </div>

      <p style={{ marginTop: "16px" }}>
        <Link to="/students" className="student-link">
          Back to list
        </Link>
      </p>
    </section>
  );
}

export default StudentDetail;