
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skill from './pages/Skills/Skill';
import Project from './pages/Projects/Project';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';


const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />

        </Routes>
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App


