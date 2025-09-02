import { Routes, Route, Link } from "react-router-dom";
import Personal from "./pages/Personal";
import Projects from "./pages/Projects";
import Professional from "./pages/Professional";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">Personal</Link>
        <Link to="/professional">Professional</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
