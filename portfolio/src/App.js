import './App.css';
import Home from './component/home/homePg';
import Skill from './component/skills/skillPg';
import Project from './component/projects/projPg';
import Contact from './component/contact/contactPg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/navPg';
import MatrixBackground from './component/background/matrixBg';

function App() {
  return (
    <div>
      <MatrixBackground/>
      <Router>
        <Navbar/>
        <Home/>
        <Project/>
        <Skill/>
        <Contact/>
      </Router>
    </div>
  );
}

export default App;
