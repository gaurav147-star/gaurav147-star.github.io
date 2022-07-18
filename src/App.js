import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Experience from "./pages/Experience/experience";
import { useEffect, useState } from "react";
import Preloader from "./components/pre";

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="app" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
