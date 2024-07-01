import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="header">
      <h1 className="logo">Shahbaz Ahmad</h1>
      <button className="nav-toggle" onClick={toggleNav}>
        <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="2x" />
      </button>
      <nav>
      <ul className={`nav-links ${isNavOpen ? 'nav-visible' : 'nav-hidden'}`}>
          <li>
            <Link to="portfolio/">Home</Link>
          </li>
          <li>
            <Link to="portfolio/about">About</Link>
          </li>
          <li>
            <Link to="portfolio/skills">Skills</Link>
          </li>
          <li>
            <Link to="portfolio/projects">Projects</Link>
          </li>
          <li>
            <Link to="portfolio/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/shahbaz-ahmad-551a71251/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a href="https://www.instagram.com/shahbazz08/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
      </div>
    </header>
  );
};

export default Header;
