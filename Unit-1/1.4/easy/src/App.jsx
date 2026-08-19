import "./App.css";
import StudentList from "./components/StudentList";

function App() {
  const students = [
    {
      id: 1,
      name: "Manu",
      rollNo: "CSE",
      course: "Computer Science",
      year: "2nd Year",
      marks: 88,
    },
    {
      id: 2,
      name: "Shivam",
      rollNo: "ECE",
      course: "Electronics",
      year: "1st Year",
      marks: 93,
    },
    {
      id: 3,
      name: "Sarvesh",
      rollNo: "ME",
      course: "Mechanical",
      year: "3rd Year",
      marks: 76,
    },
    {
      id: 4,
      name: "Ayan",
      rollNo: "IT",
      course: "Information Technology",
      year: "2nd Year",
      marks: 85,
    },
  ];

  return (
    <main className="page">
      <section className="card">
        <h1>Student Records</h1>
        <StudentList students={students} />
      </section>
    </main>
  );
}

export default App;
