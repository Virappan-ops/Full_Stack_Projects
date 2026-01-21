const About = () => {
  return (
    <div className="page-content">
      <h2>🧠 Core Concepts of this Project</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>✅ <b>State Management:</b> Using <code>useState</code> to control navigation.</li>
        <li>✅ <b>Conditional Rendering:</b> Displaying components based on state conditions.</li>
        <li>✅ <b>Virtual DOM:</b> React updates only the required parts of the UI.</li>
      </ul>
      <p>This project demonstrates how we can avoid traditional <code>&lt;a href&gt;</code> navigation to create an app-like behavior.</p>
    </div>
  );
};

export default About;