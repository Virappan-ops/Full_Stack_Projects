import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { AppProvider } from "./context/AppContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Skills from "./pages/Skills";
import Pricing from "./pages/Pricing";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#007bff" },
    background: { default: "#ffffff" },
  },
  typography: { fontFamily: "'Poppins', sans-serif" },
});

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/projects" element={ <Projects /> } />
              <Route path="/skills" element={ <Skills /> } />
              <Route path="/favorites" element={ <Favorites /> } />
              <Route path="/pricing" element={ <Pricing /> } />
              <Route path="/contact" element={ <Contact /> } />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </Provider>
  );
}

export default App;