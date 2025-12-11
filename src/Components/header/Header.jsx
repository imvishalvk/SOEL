import React from 'react'
import logo from '../../assets/SOEL-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './header.css'
function header() {
  return (

    <div className='header'>
      <div className="topribbon">
        <div className="left">
          <a href="info@soel.co.in">
            <FontAwesomeIcon icon={faEnvelope} />
            info@soel.co.in
          </a>
          <a href="tel:+917974010211">📞 +91 79740 10211</a>
        </div>
        <div className="right">
          <a href="https://www.facebook.com/soelglobal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className='socialIcons' />
          </a>
          <a href="https://www.instagram.com/soelglobal/">
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
      <div className='navbar'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <a href="">Home</a>
          <a href="">Plans</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default header