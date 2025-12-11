import React from 'react'
import logo from '../assets/SOEL-logo.png'
import TopRibbon from '../topRibbon/TopRibbon'
function header() {
  return (
    
    <>
      <TopRibbon/>
      <div className='header'>
      
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
    </>
  )
}

export default header