import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section id='contact' className="footer-section">
      <div className="footer-container">

        {/* 2. Main Footer Links Area */}
        <div className="footer-main-content">
          <div className="footer-col about-col">
            <h3>About Us</h3>
            <p>
              "Shaping future-ready students through school + home partnerships" 
              An innovative global program extending learning beyond school hours. 
              Blending AI and human expertise for personalized pathways Mission: 
              empower schools, engage parents & equip students with real-world skills.
            </p>
          </div>

          <div className="footer-col">
            <h3>Core Subjects</h3>
            <ul>
              <li><span>»</span> Self Development</li>
              <li><span>»</span> Environment & Sustainability</li>
              <li><span>»</span> Global Citizenship</li>
              <li><span>»</span> Social Entreprenurship</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Elective Subjects</h3>
            <ul>
              <li><span>»</span> Creative Arts</li>
              <li><span>»</span> Performing Arts</li>
              <li><span>»</span> Creative Writing</li>
              <li><span>»</span> AI & Coding</li>
            </ul>
          </div>
        </div>

        {/* 3. Contact Information */}
        <div className="footer-contact">
          <p>📍 SOEL Bommasandra, Banglore - 560099</p>
          <p>✉️ info@soel.co.in</p>
          <p>📞 +91 9905755943</p>
        </div>

        {/* 4. Bottom Copyright Bar */}
        <div className="footer-bottom">
          <p>© Copyright 2026 by SOEL | School of experiential Learning</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;