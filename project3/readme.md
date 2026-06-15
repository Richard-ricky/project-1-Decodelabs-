# Student Management System API

## Overview

Student Management System API is a RESTful backend application built using Node.js, Express.js, MongoDB, and Mongoose.

The project demonstrates:

- Database Integration
- CRUD Operations
- Data Validation
- REST API Development
- Permanent Data Storage

This project was developed for DecodeLabs Full Stack Development Project 3.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv

---

## Features

- Create Student
- Get All Students
- Get Student By ID
- Update Student
- Delete Student
- MongoDB Database Integration

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/student-management-system.git
```

### Enter Project Folder

```bash
cd student-management-system
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a .env file:

```env
MONGO_URI=your_mongodb_connection_string
```

---

## Run Application

```bash
npm start
```

or

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

---

## API Endpoints

### Create Student

POST

```http
/api/students
```

### Get All Students

GET

```http
/api/students
```

### Get Student By ID

GET

```http
/api/students/:id
```

### Update Student

PUT

```http
/api/students/:id
```

### Delete Student

DELETE

```http
/api/students/:id
```

---

## Sample Request

```json
{
  "name": "Richards Nyarko",
  "course": "Computer Science",
  "email": "richards@example.com"
}
```

---

## HTTP Status Codes

| Code | Meaning |
|--------|----------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Server Error |

---

## Author

Richards Nyarko

Full Stack Development Intern

DecodeLabs Technologies