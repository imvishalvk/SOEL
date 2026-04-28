import React from 'react'
import './hero.css'
import Hero1img from '../../../assets/StudingHero1.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero1() {
    return (
        <div className='hero1'>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="hero1-Left">
            <div className="main-text">
                <p>Shaping Your Future</p>
                <h2>LEARN FUTURE SKILLS ONLINE <br /> WHAT MARKET <span>DEMANDING</span></h2>
            </div>
            <button className='startButton heroBtn'> <b> Start Now</b> </button>
            </div>
            <div className="hero1-right">
                <img className='hero1img' src={Hero1img} alt="" />
            </div>
        </div>
    )
}

export default Hero1