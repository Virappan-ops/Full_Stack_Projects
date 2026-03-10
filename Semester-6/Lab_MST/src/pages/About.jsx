function About() {
  return (
    <div className="page">

      <h1>About This Website</h1>

      <p className="about-text">
        This project demonstrates how React Router enables navigation
        between multiple pages in a React application without reloading
        the browser. It follows the concept of a Single Page Application.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <h3>⚡ Fast Navigation</h3>
          <p>
            React Router allows users to move between pages instantly
            without refreshing the browser.
          </p>
        </div>

        <div className="about-card">
          <h3>🧩 Component Based</h3>
          <p>
            Each page is built using reusable React components which
            makes the application scalable.
          </p>
        </div>

        <div className="about-card">
          <h3>🎨 Modern UI</h3>
          <p>
            The interface uses simple styling with cards and responsive
            layout to simulate a real website.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 SPA Architecture</h3>
          <p>
            The application behaves as a Single Page Application where
            content updates dynamically.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;