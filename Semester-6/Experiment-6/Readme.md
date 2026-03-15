# DEV_VAULT Backend: JWT Authentication (Experiment 6) 🔐

This repository contains the Spring Boot backend implementation for DEV_VAULT, focusing on secure user authentication and session management using JSON Web Tokens (JWT).

## 🚀 Features Implemented
* **User Login (`/login`):** Authenticates user credentials and generates a secure JWT token using `jjwt`.
* **Protected Routes (`/protected`):** Implemented a custom `JwtFilter` to secure endpoints. Only requests with a valid Bearer token in the Authorization header can access these routes.
* **Session Management & Logout (`/logout`):** Successfully handles the logout process and token invalidation workflow.
* **Spring Security:** Configured `SecurityFilterChain` to disable default forms and manage stateless session policies.

## 🛠️ Tech Stack
* **Framework:** Java Spring Boot
* **Security:** Spring Security & JSON Web Tokens (JWT)
* **Build Tool:** Maven

## 📸 Postman Testing
All endpoints have been successfully tested using Postman. The testing proofs are located in the `/screenshots` folder:
1. Successful Login & Token Generation
2. Accessing Protected Route with Bearer Token
3. Successful Logout