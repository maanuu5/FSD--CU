const express = require("express");
const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        course: "CSE"
    },
    {
        id: 2,
        name: "Priya",
        age: 21,
        course: "ECE"
    },
    {
        id: 3,
        name: "Aman",
        age: 22,
        course: "IT"
    }
]; // In-memory array


// 1. GET - Get all students
app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});


// 2. GET - Get student by ID
app.get("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});


// 3. POST - Add a new student
app.post("/api/students", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});


// 4. PUT - Update a student
app.put("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const updatedStudent = {
        id: id,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students[index] = updatedStudent;

    res.status(200).json(updatedStudent);
});


// 5. DELETE - Delete a student
app.delete("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});


// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});