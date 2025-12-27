import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "./components/pre";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

// Lazy Load Pages for Performance
const Home = lazy(() => import("./pages/Home/Home"));
const Project = lazy(() => import("./pages/Projects/Project"));
const About = lazy(() => import("./pages/About/About"));
const Experience = lazy(() => import("./pages/Experience/experience"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
       <Preloader load={load} />
       <div className="App" id={load ? "no-scroll" : "scroll"}>
         <ScrollToTop />
         <Layout>
           <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-neon-blue">Loading Galaxy...</div>}>
             <AnimatedRoutes />
           </Suspense>
         </Layout>
       </div>
    </Router>
  );
};

export default App;
