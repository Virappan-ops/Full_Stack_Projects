# DEV_VAULT: Advanced React State & Performance Optimization 

This repository contains **Experiment 5**, a major upgrade to the DEV_VAULT portfolio. It demonstrates the implementation of industry-standard state management, global context usage, and complex performance optimization techniques using modern React Hooks and Redux Toolkit.

## 🚀 Key Features & Upgrades

This version introduces a dynamic **Favorites/Bookmarks system** and a **Technical Skills Dashboard**, built using advanced React Hooks:

* **Global State Management (`useContext`):** * Implemented an `AppContext` to wrap the entire application.
    * Global state is consumed across multiple components, instantly updating the Navbar badge counter and Project Cards without prop-drilling.
* **Structured State Transitions (`useReducer`):** * Replaced basic `useState` with a robust `appReducer`.
    * Handles complex actions including `ADD_FAVORITE`, `REMOVE_FAVORITE`, and `CLEAR_FAVORITES` to manage the user's saved projects efficiently.
* **Performance Optimization (`useMemo`):** * **Favorites Page:** Dynamically calculates derived analytics (e.g., total bookmarked items, AI-integrated project counts) based on the global state, re-rendering only when the favorites array changes.
    * **Skills Page:** Computes and categorizes technical proficiencies (Frontend, Backend, AI Solutions) optimally to prevent unnecessary recalculations on page load.
* **Expanded Routing:** * Added two new dedicated routes (`/favorites` and `/skills`) fully integrated with `react-router-dom`.

## 🌟 Experiment 5 Updates

* **Implemented Redux Toolkit:** Replaced the previous `useReducer` setup with a highly scalable Redux `store` and a `favoriteSlice`. It seamlessly manages actions like `addFavorite`, `removeFavorite`, and `clearFavorites` across the entire application without prop-drilling.
* **Implemented Context API:** Utilized `AppContext` to create a global mock **User Profile** state (`isPro` status toggle). This state is consumed app-wide, dynamically changing the UI and business logic based on the user's tier.
* **Added New Page:** `Pricing.jsx` - A dedicated "Freelance Services" page that ties together Context, Redux, and local logic.
* **Added `useMemo` for Performance Optimization:** Used extensively in the new `Pricing.jsx` page. It dynamically computes freelance package discounts based on two factors: the global Context state (whether the user is a "Pro Client") and the Redux state (the total number of favorited items), ensuring heavy calculations only run when dependencies change.
* **Added screenshots in** the `/screenshots` folder showcasing the Redux data flow, the new Pricing logic, and the Favorites dashboard.

## 🛠️ Tech Stack

* **Frontend:** React (via Vite)
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Global State (User Auth Mock):** React Context API
* **Routing:** React Router DOM
* **UI Framework:** Material-UI (MUI)
* **Styling:** Tailwind CSS & Custom CSS variables

## 📁 Updated Folder Structure

```text
src/
├── components/        # Reusable UI elements (Navbar, ReviewCard, Hero)
├── context/           # AppContext.jsx (Global Mock User Profile)
├── redux/             # store.js & slices/favoriteSlice.js
├── pages/             # Home, Projects, Skills, Favorites, Contact, Pricing
├── App.jsx            # Main routing and Providers wrapper (Redux + Theme + Context)
└── main.jsx           # App entry point
```

## ⚙️ Installation & Setup
Follow these steps to get a local copy of the project up and running:

Clone the repository:

```Bash
git clone <your-repo-link>
cd Experiment_4
```

Install dependencies:

```Bash
npm install
npm install @reduxjs/toolkit react-redux
```

Start the development server:

```Bash
npm run dev
```

## 📝 Featured Projects
### The portfolio highlights several advanced experiments:
* **IONIX AI:** A MERN-based productivity assistant.
* **E-Store PWA:** An offline-first storefront.
* **Azure Cloud Bot:** An AI chatbot trained on cloud documentation.
* **Smart Attendance:** Face recognition-based tracking using OpenCV.

## 🤝 Contact & Profile
Virappan Student at Chandigarh University UID: 23BAI70674 | Section: 23AML-7B
If you have any questions or want to collaborate on a project, feel free to reach out via the Contact Page within the app!

## 📄 License
This project is open-source and available under the MIT License.
