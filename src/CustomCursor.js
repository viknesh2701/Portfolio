import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const trailElements = document.querySelectorAll('.trail');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      trailElements.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${e.clientX}px`;
          trail.style.top = `${e.clientY}px`;
        }, index * 50); // Delay each trail element slightly
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="trail"></div>
      ))}
    </>
  );
};

export default CustomCursor;
