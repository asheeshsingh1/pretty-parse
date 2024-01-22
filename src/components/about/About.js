// About.js

import React from 'react';
import './About.css'; // You can create a separate CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I am a software developer at Builder.ai, passionate about creating efficient and elegant solutions.
      </p>

      <div className="skills-section">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (React, Node.js)</li>
          <li>Python</li>
          {/* Add more skills */}
        </ul>
      </div>

      <div className="contact-section">
        <h3>Contact</h3>
        <p>Feel free to connect with me on my Social Media:</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/asheeshsingh1/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/asheeshsingh1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
