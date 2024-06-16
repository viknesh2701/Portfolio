import React from 'react';
import profileImage from './vicky.jpeg';

import './About.css'; // Import CSS file for styles

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={profileImage} alt="Me" className="profile-image" />
      <p className="about-text">
        As a highly motivated Software Developer, I am passionate about leveraging my skills in programming, cybersecurity, and web development to drive impactful solutions. With a B.Tech in Information Technology from IFET College of Engineering, my academic journey has been complemented by hands-on experiences in cybersecurity through a Cisco Virtual Internship and full stack web development at AICL. I have demonstrated my expertise in various projects, including image encryption using AES and automated disease prediction using machine learning. My technical proficiencies include Python, C, HTML, CSS, JavaScript, and SQL. I am dedicated to continuous learning and thrive in dynamic work environments. Let’s connect and explore how we can innovate together.
      </p>
      
    </div>
  );
}

export default About;
