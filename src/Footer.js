import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiFrontendmentor } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <h2>Contact Information</h2>
      <p>Email: mailtovikneshk@gmail.com</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/viknesh-k-899ba3214?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwIGwMqH6TEqfoPpjUIPo5w%3D%3D" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/v_k_vicky07/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://github.com/viknesh2701" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.frontendmentor.io/profile/viknesh2701" target="_blank" rel="noopener noreferrer"><SiFrontendmentor /></a>
      </div>
    </footer>
  );
}

export default Footer;
