import React, { useState } from 'react';
import './Internship.css'; // Import a CSS file for styles and animations

function Internship() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="internship-container">
      <h1>Internship</h1>
      <button className="toggle-button" onClick={toggleDescription}>
        {showDescription ? 'Hide Internship Descriptions' : 'Show Internship Descriptions'}
      </button>
      <ul>
        <li className={`internship-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Full Stack Web Development Intern at AICL, Chennai</h2>
          <p>During my comprehensive Full Stack Web Development internship at AICL in Chennai, I developed proficiency in both front-end and back-end technologies. I actively worked on projects that involved creating responsive and dynamic web pages using HTML, CSS, and JavaScript. Additionally, I gained hands-on experience with various web development frameworks such as React for front-end and Node.js for back-end development. This internship allowed me to understand the intricacies of integrating different technologies to build seamless web applications. Through these projects, I enhanced my coding skills, learned effective debugging techniques, and developed a strong foundation in full-stack web development.</p>
        </li>
        <li className={`internship-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Cisco Virtual Intern</h2>
          <p>During my Cisco Virtual Internship, I had the opportunity to immerse myself in the fundamental concepts and tools essential for a career in cybersecurity. This internship provided hands-on experience with Cisco's Cybersecurity Essentials, which covered a wide range of topics including threat analysis, security policies, and network defense strategies. I also extensively used Cisco Packet Tracer, a powerful network simulation tool that allowed me to design, configure, and troubleshoot complex network setups. Through various practical assignments and projects, I gained a deeper understanding of how to identify vulnerabilities, implement security measures, and respond to cyber threats. This experience not only enhanced my technical skills but also improved my problem-solving abilities and attention to detail. By the end of the internship, I felt well-equipped with the knowledge and confidence to tackle real-world cybersecurity challenges, thanks to Cisco's comprehensive and hands-on training approach.</p>
        </li>
        <li className={`internship-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Web Development at CipherByte Technologies.</h2>
          <p>In this internship at CipherByte Technologies, I'll be gaining hands-on experience in web development through real-world projects, enhancing my skills and building a strong foundation for my career.</p>
        </li>
      </ul>
    </div>
  );
}

export default Internship;
