# Student Registration API

## Overview

Student Registration API is a RESTful backend application built with Node.js and Express.js.

The API allows users to:

- Retrieve all students
- Retrieve a student by ID
- Register new students
- Validate user input
- Return proper HTTP status codes

This project was developed as part of the DecodeLabs Full Stack Development Internship Program.

---

## Technologies Used

- Node.js
- Express.js
- REST API
- JavaScript

---

## Project Structure

```text
student-api/
│
├── server.js
├── package.json
├── README.md
│
└── data/
    └── students.json
```

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/student-api.git
```

### Step 2: Navigate to Project Folder

```bash
cd student-api
```

### Step 3: Install Dependencies

```bash
npm install
```

---

## Running the Application

Start the server:

```bash
node server.js
```

Or if using Nodemon:

```bash
npm run dev
```

You should see:

```text
Server running on port 5000
```

---

## Accessing the API

Once the server is running, open:

```text
http://localhost:5000
```

You should receive:

```json
{
  "message": "Welcome to Student API"
}
```

---

## API Endpoints

### 1. Home Route

**GET**

```http
/
```

Response:

```json
{
  "message": "Welcome to Student API"
}
```

---

### 2. Get All Students

**GET**

```http
/ students
```

Example:

```text
http://localhost:5000/students
```

Response:

```json
[
  {
    "id": 1,
    "name": "Richards Nyarko",
    "course": "Computer Science"
  }
]
```

---

### 3. Get Student By ID

**GET**

```http
/students/:id
```

Example:

```text
http://localhost:5000/students/1
```

Response:

```json
{
  "id": 1,
  "name": "Richards Nyarko",
  "course": "Computer Science"
}
```

---

### 4. Add New Student

**POST**

```http
/students
```

Request Body:

```json
{
  "name": "Alex Mensah",
  "course": "Cybersecurity"
}
```

Response:

```json
{
  "message": "Student added successfully",
  "student": {
    "id": 2,
    "name": "Alex Mensah",
    "course": "Cybersecurity"
  }
}
```

---

## Input Validation

The API validates:

- Student Name
- Student Course

If a required field is missing, the API returns:

```json
{
  "message": "Name and Course are required"
}
```

Status Code:

```text
400 Bad Request
```

---

## HTTP Status Codes Used

| Code | Meaning |
|--------|----------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 404 | Resource Not Found |

---

## Testing the API

The API can be tested using:

- Postman
- Thunder Client (VS Code)
- Insomnia
- Browser (GET routes)

---

## Future Improvements

- Connect to MongoDB
- User Authentication
- Update Student Records
- Delete Student Records
- JWT Authentication
- Deployment on Render

---

## Author

Richards Nyarko

Full Stack Development Intern

DecodeLabs Technologies

---

## License

This project is for educational and internship evaluation purposes only.