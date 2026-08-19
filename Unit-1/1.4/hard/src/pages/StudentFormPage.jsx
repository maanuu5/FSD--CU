import { Link, useNavigate, useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { useStudents } from "../context/StudentContext";

function StudentFormPage({ mode }) {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { addStudent, updateStudent, getStudentById } = useStudents();

  const existingStudent = mode === "edit" ? getStudentById(studentId) : null;

  if (mode === "edit" && !existingStudent) {
    return (
      <section className="panel">
        <h2>Unable to Edit</h2>
        <p className="muted">Student record not found.</p>
        <Link className="btn primary" to="/students">
          Back to Directory
        </Link>
      </section>
    );
  }

  function handleSubmit(payload) {
    if (mode === "edit") {
      updateStudent(studentId, payload);
      navigate(`/students/${studentId}`);
      return;
    }

    const created = addStudent(payload);
    navigate(`/students/${created.id}`);
  }

  return (
    <StudentForm
      mode={mode}
      initialValues={
        existingStudent
          ? {
              name: existingStudent.name,
              email: existingStudent.email,
              department: existingStudent.department,
              year: existingStudent.year,
              marks: String(existingStudent.marks),
              enrolledOn: existingStudent.enrolledOn,
            }
          : undefined
      }
      onSubmit={handleSubmit}
    />
  );
}

export default StudentFormPage;
