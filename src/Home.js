import React from 'react';
import './Home.css'; // Ensure you have the correct path for your CSS file
import profileImage from './vicky.jpeg'; // Adjust the path based on your project structure

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Hello Guys I'm Vikenesh it's my portfolio </h1>
    </div>
  );
};

export default Home;
