
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Skill from './components/Pages/Skill';
import Project from './components/Pages/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skill">
          <Skill />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
      </Switch>
      <Contact />

    </Router>
  );
}

export default App;
