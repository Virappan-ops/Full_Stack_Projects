import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">

      <h2 className="logo">ReactRouterSite</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;