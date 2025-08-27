import { Routes, Route, Link } from "react-router-dom";
import Personal from "./pages/Personal";
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
          <Route path="/professional" element={<h1>Professional Experience</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
