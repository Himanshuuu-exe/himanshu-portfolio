import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">Himanshu-exe</a>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="hero" smooth={true} duration={500} spy={true} exact='true'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500} spy={true} exact='true'>Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500} spy={true} exact='true'>Projects</Link>
        </li>
         <li className="nav-item">
          <Link to="achievements" smooth={true} duration={500} spy={true} exact='true'>Achievements</Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500} spy={true} exact='true'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;