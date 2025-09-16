import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="hero" smooth={true} duration={500}>Home</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
      <p>&copy; 2025 Himanshu Chandel. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;