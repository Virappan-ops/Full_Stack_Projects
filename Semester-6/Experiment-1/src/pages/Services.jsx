const Services = () => {
  const services = [
    { title: "Fast UX", desc: "No full page reloads for smoother interaction." },
    { title: "Less Server Load", desc: "Only data is fetched, not the entire HTML again." },
    { title: "App-like Behavior", desc: "Similar to mobile apps like Instagram or Netflix." }
  ];

  return (
    <div className="page-content">
      <h2>🛠️ Our Services & Benefits</h2>
      <div className="services-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        {services.map((s, index) => (
          <div key={index} className="service-item" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;