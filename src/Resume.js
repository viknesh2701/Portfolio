import React from 'react';
import resumePDF from './resume.pdf'; // Import resume PDF file

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Download My Resume</h2>
      <br /><br /><br />
      <a href={resumePDF} download className="download-button">
        <p className="resume-link">Here is my resume.</p>
      </a>
    </div>
  );
};

export default Resume;
