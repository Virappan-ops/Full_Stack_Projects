import Navbar from "../components/Navbar";

const MainLayout = ({ children, setPage }) => {
  return (
    <div className="app-wrapper">
      <Navbar setPage={setPage} />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        © Experiment 1 Made By Virappan "23BAI70674"
      </footer>
    </div>
  );
};
export default MainLayout;