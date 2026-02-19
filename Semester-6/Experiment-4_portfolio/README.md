# DEV_VAULT: Advanced React State & Performance Optimization 

This repository contains **Experiment 4**, an upgraded version of the original multi-page portfolio (Experiment 3). It demonstrates advanced React concepts by integrating global state management, structured state transitions, and performance optimization hooks, all while maintaining a sleek, modern, and responsive UI.

## 🚀 Key Features & Upgrades

This version introduces a dynamic **Favorites/Bookmarks system** and a **Technical Skills Dashboard**, built using advanced React Hooks:

* **Global State Management (`useContext`):** * Implemented an `AppContext` to wrap the entire application.
    * Global state is consumed across multiple components, instantly updating the Navbar badge counter and Project Cards without prop-drilling.
* **Structured State Transitions (`useReducer`):** * Replaced basic `useState` with a robust `appReducer`.
    * Handles complex actions including `ADD_FAVORITE`, `REMOVE_FAVORITE`, and `CLEAR_FAVORITES` to manage the user's saved projects efficiently.
* **Performance Optimization (`useMemo`):** * **Favorites Page:** Dynamically calculates derived analytics (e.g., total bookmarked items, AI-integrated project counts) based on the global state, re-rendering only when the favorites array changes.
    * **Skills Page:** Computes and categorizes technical proficiencies (Frontend, Backend, AI Solutions) optimally to prevent unnecessary recalculations on page load.
* **Expanded Routing:** * Added two new dedicated routes (`/favorites` and `/skills`) fully integrated with `react-router-dom`.

## 🛠️ Tech Stack

* **Frontend Library:** React (via Vite)
* **Routing:** React Router DOM
* **UI Framework:** Material-UI (MUI) 
* **Styling:** Tailwind CSS & Custom CSS variables
* **State Management:** React Context API + Reducer

## 📁 Updated Folder Structure

```text
src/
├── components/        # Reusable UI elements (Navbar, ReviewCard, HoverRating)
├── context/           # AppContext.jsx (Global Context Provider)
├── reducer/           # appReducer.js (Action logic and initial state)
├── pages/             # Home, Projects, Contact, Favorites, Skills
├── App.jsx            # Main routing and ThemeProvider wrap
├── index.css          # Global Tailwind and base styles
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

Would you like me to guide you on how to push this newly updated project to GitHub or deploy it live on Vercel/Netlify?

## 📄 License
This project is open-source and available under the MIT License.
