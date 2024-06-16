import React from 'react';
import './Loading.css'; // Create this file for styling

function Loading() {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
