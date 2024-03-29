import "./App.css";
import NavBar from "./components/Navbars/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import { useState } from "react";
import ProjectDetails from "./pages/projects/ProjectDetails";

function App() {
  const [tone, setTone] = useState("dark");
  const [windows, setWindows] = useState(
    window.location.pathname.replace(/\//g, "")
  );

  window.addEventListener("blur", () => {
    document.title = "Come back... Nathaniel's Portfolio";
  });

  window.addEventListener("focus", () => {
    document.title = "Nathaniel's Portfolio";
  });

  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor: tone === "light" ? "#f5fbff" : "#091927",
          color: tone === "light" ? "black" : "white",
        }}
      >
        <NavBar tone={tone} setTone={setTone} />

        <Routes>
          <Route path="/" element={<Home tone={tone} />} />
          <Route path="/projects">
            <Route index element={<Projects tone={tone} />} />
            <Route path=":name" element={<ProjectDetails tone={tone}/>} />
          </Route>
          <Route path="/about" element={<About tone={tone} />} />
          <Route path="/contact" element={<Contact tone={tone} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
