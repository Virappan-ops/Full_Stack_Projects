# 🚀 Interactive UI/UX Scroll Experiment

A visually immersive React application that integrates **WebGL-powered backgrounds**, **smooth-scrolling stack animations**, and **polished Material UI components**. This project demonstrates a seamless blend of high-performance animations from React Bits with the functional elegance of Material UI.

## ✨ Key Features

* **WebGL Gradient Blinds:** A dynamic, noise-textured gradient background rendered using `ogl` that updates visually as the user scrolls.
* **Smooth Scroll Stack:** A "pinned" card interaction where items stack and scale dynamically, creating a tactile depth effect.
* **Lenis Integration:** Utilizes the Lenis library to ensure ultra-smooth scrolling across all browsers and devices.
* **Material UI Elements:** * **Avatar:** A clean profile identification component positioned in the header.
    * **Interactive Rating:** A footer-based feedback system with animated hover states.
* **Responsive Architecture:** Built with Tailwind CSS and custom CSS modules to ensure a fluid layout on any screen size.

## 🛠️ Tech Stack

* **Framework:** React 18+ (Vite)
* **Styling:** Tailwind CSS & Material UI System
* **Animation Libraries:**
    * **Lenis:** High-performance smooth scrolling.
    * **OGL:** Minimalist WebGL library for the background effects.
* **UI Components:** [Material UI (MUI)](https://mui.com/) and [React Bits](https://www.reactbits.dev/).

## 📦 Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/interactive-scroll-experiment.git](https://github.com/your-username/interactive-scroll-experiment.git)
    cd interactive-scroll-experiment
    ```

2.  **Install Dependencies:**
    ```bash
    npm install @mui/material @emotion/react @emotion/styled @mui/icons-material lenis ogl tailwindcss
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

* **App.jsx**: The primary orchestrator managing state and component layout.
* **ScrollStack.jsx**: Handles the complex pinning logic and card transformation math.
* **GradientBlinds.jsx**: The WebGL renderer for the animated background.
* **avatar.jsx & rating.jsx**: Polished UI components for user identity and feedback.

## 📝 Configuration

You can easily customize the card content or background colors in `App.jsx`:

```jsx
// Modify card content
<ScrollStackItem itemClassName="card-blue">
  <h2>Name</h2>
  <p>Virappan</p>
</ScrollStackItem>

// Change background colors
<GradientBlinds
  gradientColors={['#FF9FFC', '#5227FF']}
  blindCount={12}
/>

🤝 Credits
* Animated Components: React Bits
* UI Components: Material UI (MUI)
* Smooth Scroll: Lenis