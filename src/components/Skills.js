import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiMysql, SiTailwindcss, SiExpress } from 'react-icons/si';
import { CgCPlusPlus } from "react-icons/cg";
import { FaJava } from "react-icons/fa6";


const skills = [
  { name: 'C++', icon: <CgCPlusPlus /> },
  { name: 'Core Java', icon: <FaJava /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <SiMysql /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;