import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profilePic from '../assets/profile-pic.jpg'; // Ensure the image is here

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
                <img src={profilePic} alt="Himanshu Chandel" className="hero-img" />
        <h1>Himanshu Chandel</h1>
        <p className="subtitle">Computer Science Student & Full Stack Developer</p>
        <p className="summary">
          Motivated and detail-oriented student with strong expertise in building scalable and robust applications. Passionate about solving complex problems and delivering impactful projects.
        </p>
        <div className="social-icons">
          <a href="https://github.com/Himanshuuu-exe" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-chandel-38a3402a2/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/Himanshuuu_exe/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <SiLeetcode />
          </a>
          <a href="https://x.com/Himanshuuu_exe" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;