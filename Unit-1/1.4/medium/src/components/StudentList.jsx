function StudentList({ students, getGrade }) {
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
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.course}</td>
                <td>{student.year}</td>
                <td>{student.marks}</td>
                <td>{getGrade(student.marks)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="empty-state">
                No students match the current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
