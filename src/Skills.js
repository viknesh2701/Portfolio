import React, { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiC, SiMysql } from 'react-icons/si';
import './Skills.css';

function Skills() {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setShowItems(true);
  }, []);

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <br /><br /><br /><br />
      <ul className="skills-list">
        <li className={showItems ? 'show' : ''}><FaReact color="#61DBFB" /> React</li>
        <br />
        <li className={showItems ? 'show' : ''}><FaHtml5 color="#E34F26" /> HTML5</li>
        <br />
        <li className={showItems ? 'show' : ''}><FaCss3Alt color="#1572B6" /> CSS3</li>
        <br />
        <li className={showItems ? 'show' : ''}><FaJs color="#F7DF1E" /> JavaScript</li>
        <br /><li className={showItems ? 'show' : ''}><FaNodeJs color="#339933" /> Node.js</li>
        <br />
        <li className={showItems ? 'show' : ''}><FaPython color="#306998" /> Python</li>
        <br />
        <li className={showItems ? 'show' : ''}><FaJava color="#007396" /> Java</li>
        <br />
        <li className={showItems ? 'show' : ''}><SiC color="#A8B9CC" /> C</li>
        <br />
        <li className={showItems ? 'show' : ''}><SiMysql color="#4479A1" /> SQL</li>
      </ul>
    </div>
  );
}

export default Skills;
