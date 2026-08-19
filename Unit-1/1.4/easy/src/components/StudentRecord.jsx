function StudentRecord({ student }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.rollNo}</td>
      <td>{student.course}</td>
      <td>{student.year}</td>
      <td>{student.marks}</td>
    </tr>
  );
}

export default StudentRecord;
