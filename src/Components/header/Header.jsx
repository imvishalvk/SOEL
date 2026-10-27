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
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 
import './header.css'
import { Navigate } from 'react-router-dom';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = Navigate;

  return (
    <div className='header'>

      <div className="topribbon">
        <div className="left">
          <a href="mailto:info@soel.co.in">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className=""> info@soel.in</span>
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
        <a className="logo" href='/'>
          <img src={logo} alt="SOEL Logo" />
        </a>


        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>

        <div className={isMobile ? "menu active" : "menu"}>
          <a href="/" onClick={() => setIsMobile(false)}>Home</a>
          <a href="#plans" onClick={() => setIsMobile(false)}>Plans</a>
          <a href="#about" onClick={() => setIsMobile(false)}>About</a>
          <a href="#contact" onClick={() => setIsMobile(false)}>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Header;