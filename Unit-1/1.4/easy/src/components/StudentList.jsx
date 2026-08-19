import StudentRecord from "./StudentRecord";

function StudentList({ students }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Year</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRecord key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
