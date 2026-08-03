function StudentList({ heading, students }) {
  return (
    <section className="card">
      <h2>{heading}</h2>

      <div className="list">
        {students.map(student => (
          <article key={student.id} className="item">
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Course: {student.program}</p>
            <p>Grade: {student.grade}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StudentList
