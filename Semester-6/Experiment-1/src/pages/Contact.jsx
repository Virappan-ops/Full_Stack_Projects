const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Simulation)");
  };

  return (
    <div className="page-content">
      <h2>📞 Contact Us </h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Your Name" required style={{ padding: '10px' }} />
        <input type="email" placeholder="Your Email" required style={{ padding: '10px' }} />
        <textarea placeholder="Your Message" rows="4" style={{ padding: '10px' }}></textarea>
        <button type="submit" style={{ padding: '10px', background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;