import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import ParticleBackground from'./pages/ParticleBackground'

import './components/Style.css';

const App = () => {
  return (
    <Router basename="/my-portfolio">
      <Layout>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
    
  );
};

export default App;
