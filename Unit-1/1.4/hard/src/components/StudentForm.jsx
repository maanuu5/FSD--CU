import { useMemo, useState } from "react";

const initialState = {
  name: "",
  email: "",
  department: "Computer Science",
  year: "1st Year",
  marks: "",
  enrolledOn: "",
};

function StudentForm({ mode, initialValues, onSubmit }) {
  const [formData, setFormData] = useState(() => initialValues || initialState);
  const [errors, setErrors] = useState({});

  const title = useMemo(
    () => (mode === "edit" ? "Edit Student Details" : "Student Registration"),
    [mode],
  );

  function validate(data) {
    const nextErrors = {};

    if (!data.name.trim()) nextErrors.name = "Name is required";
    if (!data.email.trim()) nextErrors.email = "Email is required";
    if (!data.enrolledOn) nextErrors.enrolledOn = "Enrollment date is required";

    const marksNumber = Number(data.marks);
    if (Number.isNaN(marksNumber) || data.marks === "") {
      nextErrors.marks = "Marks are required";
    } else if (marksNumber < 0 || marksNumber > 100) {
      nextErrors.marks = "Marks must be between 0 and 100";
    }

    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    onSubmit({
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
    });
  }

  return (
    <section className="panel form-panel">
      <h2>{title}</h2>
      <p className="muted">Manage personal details, academics, and enrollment metadata.</p>

      <form className="student-form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          Full Name
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" />
          {errors.name ? <span className="error-text">{errors.name}</span> : null}
        </label>

        <label className="field">
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="student@college.edu"
          />
          {errors.email ? <span className="error-text">{errors.email}</span> : null}
        </label>

        <label className="field">
          Department
          <select name="department" value={formData.department} onChange={handleChange}>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            <option>Information Technology</option>
            <option>Civil</option>
          </select>
        </label>

        <label className="field">
          Year
          <select name="year" value={formData.year} onChange={handleChange}>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </label>

        <label className="field">
          Marks
          <input
            type="number"
            name="marks"
            min="0"
            max="100"
            value={formData.marks}
            onChange={handleChange}
            placeholder="0 to 100"
          />
          {errors.marks ? <span className="error-text">{errors.marks}</span> : null}
        </label>

        <label className="field">
          Enrolled On
          <input type="date" name="enrolledOn" value={formData.enrolledOn} onChange={handleChange} />
          {errors.enrolledOn ? <span className="error-text">{errors.enrolledOn}</span> : null}
        </label>

        <button type="submit" className="btn primary submit-btn">
          {mode === "edit" ? "Save Changes" : "Register Student"}
        </button>
      </form>
    </section>
  );
}

export default StudentForm;
