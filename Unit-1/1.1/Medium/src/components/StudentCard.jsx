import '../App.css'

function StudentCard({ name, course, age }) {
  return (
    <section className="profile-box">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>
    </section>
  )
}

export default StudentCard
