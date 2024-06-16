import React, { useState } from 'react';
import './Projects.css'; // Import a CSS file for styles and animations

function Projects() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <button className="toggle-button" onClick={toggleDescription}>
        {showDescription ? 'Hide Project Descriptions' : 'Show Project Descriptions'}
      </button>
      <ul>
        <li className={`project-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Image Encryption and Decryption using AES Algorithm</h2>
          <p>I developed a model for Image Encryption and Decryption using the AES algorithm, which ensures secure handling of images. This model encrypts images on the system, transforming them into a cipher format to protect sensitive data. Using the AES (Advanced Encryption Standard) algorithm, the model provides robust security during the encryption process and allows for decryption to restore the original image. This ensures both the confidentiality and integrity of the images stored and transmitted across the system.</p>
        </li>
        <li className={`project-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Implementation of Keylogger Using Python</h2>
          <p>In this project, this cybersecurity tool, coded in Python, captures the keystrokes made by a victim and transmits these keystrokes to the attacker. Designed for monitoring and data collection, it enables the attacker to obtain sensitive information such as passwords and personal messages entered by the victim on their device.</p>
        </li>
        <li className={`project-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Automated Symptom tracking and prediction of Angioedema disease using ML</h2>
          <p>This project involves automated symptom tracking and prediction of angioedema disease using machine learning. It collects and analyzes patient data to identify patterns and predict flare-ups, enabling timely intervention. And it predicts whether the given image is affected or not.</p>
        </li>
        <li className={`project-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Online Shopping Mall</h2>
          <p>In this project, I'm responsible for Customer Service, focusing on enhancing customer satisfaction and managing customer interactions to ensure a seamless shopping experience. The Shopping Mall project aims to integrate various services, including Admin, ShopOwner, Employee, Order, and User services, to create a comprehensive and efficient shopping platform.</p>
        </li>
        <li className={`project-item ${showDescription ? 'show' : 'hide'}`}>
          <h2>Portfolio</h2>
          <p>In this, I developed my portfolio website created by React and hosted through Firebase. Here, I split the contents of my portfolio into various components and developed them.</p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
