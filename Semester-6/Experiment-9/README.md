# Frontend: React RBAC Integration (Experiment 9) 🛡️

This repository contains the React frontend implementation for Role-Based Access Control (RBAC), directly connected to the Spring Boot backend developed in Experiment 7.

## 🚀 Features Implemented
* **Role-Based Authentication:** Users login via standard basic authentication, and their respective roles (`ADMIN` or `USER`) are stored in `sessionStorage`.
* **Dynamic Routing:** * `USER` role is redirected to the `/user` dashboard.
  * `ADMIN` role is redirected to the strictly guarded `/admin` dashboard.
* **Component-Level Protection:** * Unauthenticated users are redirected to the Login page.
  * `USER` accounts attempting to fetch `/api/admin/dashboard` gracefully handle the `403 Forbidden` response.
* **Axios Basic Auth:** Properly configured API calls sending encrypted `auth` headers for stateless backend verification.

## 🛠️ Tech Stack
* **Frontend:** React.js
* **UI/UX:** Material UI (MUI) & Bootstrap 5
* **Network:** Axios
* **State Management:** SessionStorage

## 📸 Validation & Testing
6 mandatory scenarios have been tested via the UI. Check the `/screenshots` directory for proofs:
1. React Login UI Interface.
2. `USER` fetching data successfully from the User API.
3. `USER` receiving a `403 Forbidden` when attempting an Admin API hit.
4. `ADMIN` successfully hitting the restricted Admin API.
5. Browser DevTools demonstrating `role` and credentials stored in `sessionStorage`.
6. Unauthorized component access interception (URL tampering handling).