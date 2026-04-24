# DEV_VAULT: Node.js CRUD API (Experiment 10) 🛠️

This repository contains a standalone RESTful backend implementation demonstrating CRUD (Create, Read, Update, Delete) operations using Node.js, Express.js, and MongoDB.

## 🚀 Key Implementations
* **REST API Routing:** Implemented modular routing using Express Router (`studentRoutes.js`).
* **Database Integration:** Successfully established a connection with a local MongoDB instance using Mongoose ORM.
* **Schema Definition:** Created a robust `Student` schema with timestamps and custom fields (e.g., `specialization`).
* **CRUD Logic:** * `POST /api/students` - Adds a new record.
  * `GET /api/students` - Fetches all records.
  * `GET /api/students/:id` - Fetches a specific record.
  * `PUT /api/students/:id` - Updates an existing record.
  * `DELETE /api/students/:id` - Removes a record from the database.

## 🛠️ Technology Stack
* **Backend Environment:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Localhost)
* **ODM:** Mongoose
* **Testing Tool:** Postman

## 📸 API Verification
All CRUD functionalities have been rigorously tested. Validating screenshots are located in the repository:
1. Terminal log indicating successful MongoDB connection.
2. POST request confirming data insertion.
3. GET request fetching the entire collection.
4. PUT request verifying data modification.
5. DELETE request confirming successful record removal.
6. MongoDB Compass view displaying the active database collection.