const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">ReactSPA</div>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => setPage("home")}>Home</button>
          <button className="nav-btn" onClick={() => setPage("about")}>About</button>
          <button className="nav-btn" onClick={() => setPage("services")}>Services</button>
          <button className="nav-btn" onClick={() => setPage("contact")}>Contact</button>
        </div>
        <div className="nav-spacer"></div> 
      </div>
    </nav>
  );
};

export default Navbar;