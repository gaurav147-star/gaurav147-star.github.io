
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Projects/Project';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';
import Experience from './pages/Experience/experience';


const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience/>} />

        </Routes>
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App


