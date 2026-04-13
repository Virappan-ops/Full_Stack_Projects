# Frontend: React JWT Integration (Experiment 8) 🌐

This repository contains the React frontend implementation that consumes the Spring Boot JWT backend (Experiment 6). It demonstrates session-based authentication and route protection using JSON Web Tokens.

## 🚀 Features Implemented
* **Session Management:** Securely stores the JWT in `sessionStorage` upon successful login.
* **Protected Routing:** Implemented logic to prevent unauthorized access to the `/dashboard`. Unauthenticated users are redirected to the login page.
* **API Integration:** Uses Axios to make `POST` requests for authentication and `GET` requests with `Authorization: Bearer <token>` headers to fetch protected data.
* **Stateless Logout:** Successfully destroys the session by clearing the token from `sessionStorage` and redirecting the user.

## 🛠️ Tech Stack
* **Frontend Framework:** React.js
* **Routing:** React Router DOM
* **Styling:** Bootstrap 5 & Material UI (MUI)
* **HTTP Client:** Axios

## 📸 Validation & Testing
All frontend functionalities have been tested and verified. Screenshots are located in the `/screenshots` folder:
1. React Login UI.
2. JWT token successfully stored in browser `sessionStorage`.
3. Fetching and displaying data from the protected Spring Boot API.
4. Unauthorized access prevention (auto-redirect to login).
5. Successful session termination (Logout).