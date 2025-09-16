import React from 'react';
import { FaCode, FaTrophy, FaKeyboard, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const achievementsData = [
  {
    icon: <FaKeyboard />,
    text: 'Completed the #100DaysOfCode challenge, consistently building and learning.',
    links: [
      { url: 'https://x.com/Himanshuuu_exe/status/1960358179457404992', icon: <FaTwitter /> },
      { url: 'https://github.com/Himanshuuu-exe/node.js-react.js-jsx_specialist.git', icon: <FaGithub /> },
    ],
  },
  {
    icon: <FaCode />,
    text: 'Solved over 50+ problems on LeetCode, strengthening my DSA skills.',
    links: [],
  },
  {
    icon: <FaTrophy />,
    text: 'Participated in Prayatna 2.0, a national-level hackathon.',
    links: [
      { url: 'https://www.linkedin.com/posts/himanshu-chandel-38a3402a2_hackathon-prayatna2-technexus-activity-7304393968845250560-S9rn', icon: <FaLinkedin /> },
    ],
  },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-list">
          {achievementsData.map((item, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-icon">{item.icon}</div>
              <p>{item.text}</p>
              <div className="social-icons">
                 {item.links.map((link, linkIndex) => (
                   <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;