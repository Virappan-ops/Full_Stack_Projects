# DEV_VAULT Backend: Role-Based Access Control (RBAC) (Experiment 7) 🛡️

This repository contains the Spring Boot backend implementation demonstrating Role-Based Access Control (RBAC). It focuses on secure user authentication, role assignments, and route protection using Spring Security, Spring Data JPA, and an in-memory H2 database.

## 🚀 Features Implemented
* **Role-Based Access Control:** Configured distinct roles (`ROLE_USER` and `ROLE_ADMIN`) to manage permissions effectively.
* **Secured API Endpoints:** Implemented strict route protection based on user authorities:
  * `/api/public/hello`: Accessible to everyone (No authentication required).
  * `/api/user/profile`: Accessible only to authenticated users with `USER` or `ADMIN` roles.
  * `/api/admin/dashboard`: Strictly restricted to users with the `ADMIN` role.
* **Database Integration:** Utilized an H2 In-Memory Database paired with Spring Data JPA for seamless user data management.
* **Automated Data Seeding:** Implemented a `CommandLineRunner` (`DataSeeder`) to automatically create default test users (`virappan` as USER, `vishav` as ADMIN) upon server startup.
* **Basic Authentication:** Secured endpoints using Spring Security's HTTP Basic Authentication for straightforward API testing.

## 🛠️ Tech Stack
* **Framework:** Java Spring Boot (v3.2.4)
* **Security:** Spring Security (HTTP Basic Auth)
* **Database:** H2 Database (In-Memory) & Spring Data JPA (Hibernate)
* **Build Tool:** Maven

## 📸 Postman Testing & Verification
All access control rules and API endpoints have been rigorously tested using Postman. The testing proofs are located in the `/screenshots` folder, covering all required scenarios:
1. **Unauthenticated Access:** Request without credentials returning `401 Unauthorized`.
2. **Public Access:** Successful access to the public endpoint without login.
3. **User Access (Success):** `USER` (Virappan) successfully accessing the `/api/user/profile` endpoint.
4. **Access Denied (Forbidden):** `USER` (Virappan) attempting to access the Admin endpoint, correctly returning `403 Forbidden`.
5. **Admin Access (Success):** `ADMIN` (Vishav) successfully accessing the restricted `/api/admin/dashboard` endpoint.