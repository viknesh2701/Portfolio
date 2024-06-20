import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleToggle = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  const projects = [
    {
      title: "Image Encryption and Decryption using AES Algorithm",
      description: "I developed a model for Image Encryption and Decryption using the AES algorithm, which ensures secure handling of images. This model encrypts images on the system, transforming them into a cipher format to protect sensitive data. Using the AES (Advanced Encryption Standard) algorithm, the model provides robust security during the encryption process and allows for decryption to restore the original image. This ensures both the confidentiality and integrity of the images stored and transmitted across the system."
    },
    {
      title: "Implementation of Keylogger Using Python",
      description: "This cybersecurity tool, coded in Python, captures the keystrokes made by a victim and transmits these keystrokes to the attacker. Designed for monitoring and data collection, it enables the attacker to obtain sensitive information such as passwords and personal messages entered by the victim on their device."
    },
    {
      title: "Automated Symptom tracking and prediction of Angioedema disease using ML",
      description: "This project involves automated symptom tracking and prediction of angioedema disease using machine learning. It collects and analyzes patient data to identify patterns and predict flare-ups, enabling timely intervention. And it predicts whether the given image is affected or not."
    },
    {
      title: "Online Shopping Mall",
      description: "In this project, I'm responsible for Customer Service, focusing on enhancing customer satisfaction and managing customer interactions to ensure a seamless shopping experience. The Shopping Mall project aims to integrate various services, including Admin, ShopOwner, Employee, Order, and User services, to create a comprehensive and efficient shopping platform."
    },
    {
      title: "Portfolio",
      description: "In this, I developed my portfolio website created with React and hosted it through Firebase. Here I split the contents of my portfolio into various components and developed on it."
    }
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index}>
            <h2 onClick={() => handleToggle(index)}>{project.title}</h2>
            {activeProject === index && <p>{project.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
