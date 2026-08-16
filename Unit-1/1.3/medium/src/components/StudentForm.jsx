function StudentForm() {
  return (
    <section className="page-card">
      <h1>Register Student</h1>
      <p>Use this simple form to represent a student registration page.</p>

      <form className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Student Name</label>
          <input id="name" type="text" placeholder="Enter student name" />
        </div>

        <div className="form-field">
          <label htmlFor="course">Course</label>
          <input id="course" type="text" placeholder="Enter course name" />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter email address" />
        </div>

        <button type="button" className="form-button">
          Register
        </button>
      </form>
    </section>
  );
}

export default StudentForm;