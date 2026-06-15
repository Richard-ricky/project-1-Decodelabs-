# Student Registration API

## Overview

This project is a simple REST API built using Node.js and Express.js.

The API allows users to:

- Retrieve student records
- Retrieve a specific student
- Add a new student
- Validate user input
- Return proper HTTP status codes

## Technologies Used

- Node.js
- Express.js
- REST API

## API Endpoints

### GET /

Returns welcome message.

### GET /students

Returns all students.

### GET /students/:id

Returns a single student.

### POST /students

Adds a new student.

## Validation

The API validates:

- Student Name
- Student Course

If any field is missing, a 400 Bad Request response is returned.

## HTTP Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found

## Author

Richards Nyarko

DecodeLabs Full Stack Development Internship