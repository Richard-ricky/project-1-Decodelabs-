const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Richards Nyarko",
    course: "Computer Science"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Student API"
  });
});

// GET All Students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// GET Student By ID
app.get("/students/:id", (req, res) => {
  const student = students.find(
    s => s.id === parseInt(req.params.id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

// POST New Student
app.post("/students", (req, res) => {

  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and Course are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});