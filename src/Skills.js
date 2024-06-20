import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiC, SiMysql } from 'react-icons/si';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <ul className="skills-list">
        <li><FaReact color="#61DBFB" /> React</li>
        <li><FaHtml5 color="#E34F26" /> HTML5</li>
        <li><FaCss3Alt color="#1572B6" /> CSS3</li>
        <li><FaJs color="#F7DF1E" /> JavaScript</li>
        <li><FaNodeJs color="#68A063" /> Node.js</li>
        <li><FaPython color="#3776AB" /> Python</li>
        <li><FaJava color="#007396" /> Java</li>
        <li><SiC color="#A8B9CC" /> C</li>
        <li><SiMysql color="#4479A1" /> SQL</li>
      </ul>
    </div>
  );
}

export default Skills;
