import React, { useState } from 'react'
import logo from '../../assets/SOEL-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Added Icons
import './header.css'

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='header'>
      {/* Top Ribbon - Hidden on small mobile to save space */}
      <div className="topribbon">
        <div className="left">
          <a href="mailto:info@soel.co.in">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="hide-mobile"> info@soel.in</span>
          </a>
          <a href="tel:+917974010211">📞 +91 98765 43210</a>
        </div>
        <div className="right hide-tablet">
          <a href="https://www.facebook.com/soelglobal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className='socialIcons' />
          </a>
          <a href="https://www.instagram.com/soelglobal/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='socialIcons' />
          </a>
          <a href="https://www.linkedin.com/company/soelglobal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className='socialIcons' />
          </a>
          <a href="https://x.com/SoELglobal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className='socialIcons' />
          </a>
          <a href="https://www.youtube.com/@soelglobal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className='socialIcons' />
          </a>
        </div>
      </div>

      <nav className='navbar'>
        <div className="logo">
          <img src={logo} alt="SOEL Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>

        <div className={isMobile ? "menu active" : "menu"}>
          <a href="/#" onClick={() => setIsMobile(false)}>Home</a>
          <a href="#plans" onClick={() => setIsMobile(false)}>Plans</a>
          <a href="#about" onClick={() => setIsMobile(false)}>About</a>
          <a href="#contact" onClick={() => setIsMobile(false)}>Contact</a>
          <button className='startButton nav-btn'> <b>Apply Now</b> </button>
        </div>
      </nav>
    </div>
  )
}

export default Header;