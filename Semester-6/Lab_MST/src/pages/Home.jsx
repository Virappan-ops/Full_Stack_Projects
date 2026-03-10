function Home() {
  return (
    <div className="page">
      <h1>Welcome to My React Website 🚀</h1>

      <p>
        This is a simple React Routing project that demonstrates how navigation
        works in a Single Page Application.
      </p>

      <div className="card-container">
        <div className="card">
          <h3>⚡ Fast</h3>
          <p>React updates only the required parts of the UI.</p>
        </div>

        <div className="card">
          <h3>🔗 Routing</h3>
          <p>React Router enables smooth navigation between pages.</p>
        </div>

        <div className="card">
          <h3>📱 Responsive</h3>
          <p>The UI works across multiple screen sizes.</p>
        </div>
      </div>

      {/* Credit Section */}
      <p className="credit">Made by Virappan • 23BAI70674</p>
    </div>
  );
}

export default Home;