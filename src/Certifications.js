import React from 'react';
import './Certifications.css';

function Certifications() {
  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <ul className="certifications-list">
        <li><a href="https://www.credly.com/badges/d96b4e20-1f34-4e54-97c8-87778bb02b5d/public_url">Introduction To Networks</a></li>
        <li><a href="https://www.credly.com/badges/0a3b9562-21b6-4547-8adb-d781f75811ff/public_url">Introduction to packettracer</a></li>
        <li><a href="https://www.credly.com/badges/30257d30-2689-47c5-8407-079d4fe13b36/public_url">Introduction to Cybersecurity</a></li>
        <li><a href="https://cert.diceid.com/csr/cid/s4aUUS?verify=true">Java Full Stack Development</a></li>
      </ul>
    </div>
  );
}

export default Certifications;
