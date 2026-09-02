
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // Group member and student names
        const groupNames = [
          "Manu Negi",
          "Sanidhya",
          "Ayan",
          "Sarvesh",
          "Rishav",
          "Rahul",
          "Aman",
          "Ankit",
          "Vishal",
          "Rohit",
          "Aditya",
          "Arjun",
          "Karan",
          "Yash",
        ];

        // Create 15 students using API data
        const updatedStudents = groupNames.map((name, index) => {
          const apiStudent = data[index % data.length];

          return {
            id: index + 1,
            name: name,
            email: apiStudent.email,
            address: {
              city: apiStudent.address.city,
            },
          };
        });

        setStudents(updatedStudents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  // Live search by student name
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Loading message
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error message
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Data Table</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "250px",
        }}
      />

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No student found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

