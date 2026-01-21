import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  // Conditional Rendering Logic
  const renderPage = () => {
    switch (page) {
      case "home": return <Home />;
      case "about": return <About />;
      case "services": return <Services />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <MainLayout setPage={setPage}>
      {renderPage()}
    </MainLayout>
  );
}

export default App;