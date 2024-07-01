import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Layout from './components/Layout';
import './components/Style.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="my-portfolio/" element={<Home />} />
          <Route path="my-portfolio/about" element={<About />} />
          <Route path="my-portfolio/skills" element={<Skills />} />
          <Route path="my-portfolio/projects" element={<Projects />} />
          <Route path="my-portfolio/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
