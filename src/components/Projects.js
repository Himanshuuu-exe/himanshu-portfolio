import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Custom TM HTTP Server',
    description: 'Developed a high-performance HTTP server from the ground up using Node.js. This project focuses on understanding core networking protocols, handling concurrent requests efficiently, and ensuring secure data transmission. Optimized for a 40% reduction in response time under high traffic.',
    githubLink: null, // Add your link here later
  },
  {
    title: 'CLI Chat Application',
    description: 'A feature-rich command-line chat application built with Node.js and TCP sockets. It enables real-time, multi-user communication with a robust client-server architecture, secure user authentication, and optimized message delivery for low latency.',
    githubLink: null, // Add your link here later
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.githubLink ? (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                ) : (
                  <span className="disabled-link" title="Repo coming soon!">
                    <FaGithub />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;