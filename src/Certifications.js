import React, { useEffect, useState } from 'react';
import './Certifications.css';

function Certifications() {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setShowItems(true);
  }, []);

  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <ul>
        <li className={showItems ? 'show' : ''}>
          <a href="https://www.credly.com/badges/d96b4e20-1f34-4e54-97c8-87778bb02b5d/public_url" target="_blank" rel="noopener noreferrer">
            Introduction To Networks
          </a>
        </li>
        <br />
        <br />
        <li className={showItems ? 'show' : ''}>
          <a href="https://www.credly.com/badges/0a3b9562-21b6-4547-8adb-d781f75811ff/public_url" target="_blank" rel="noopener noreferrer">
            Introduction to Packet Tracer
          </a>
        </li>
        <br />
        <br />
        <li className={showItems ? 'show' : ''}>
          <a href="https://www.credly.com/badges/30257d30-2689-47c5-8407-079d4fe13b36/public_url" target="_blank" rel="noopener noreferrer">
            Introduction to Cybersecurity
          </a>
        </li>
        <br />
        <br />
        <li className={showItems ? 'show' : ''}>
          <a href="https://cert.diceid.com/csr/cid/s4aUUS?verify=true" target="_blank" rel="noopener noreferrer">
            Java Full Stack Development
          </a>
        </li>
        <br />
        <br />
      </ul>
    </div>
  );
}

export default Certifications;
