import React from 'react'
import './hero.css'
import Hero1img from '../../assets/Images/studiying girl.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom'

function Hero1() {
    const navigate = useNavigate;
    return (
        <section id='home' className='hero1'>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="hero1-Left">
            <div className="main-text">
                <p>Shaping Your Future</p>
                <h2>LEARN FUTURE SKILLS ONLINE <br /> WHAT MARKET <span>DEMANDING</span></h2>
            </div>
            {/* <button className='startButton heroBtn' onClick={()=> navigate('/#plans')}> <b> Start Now</b> </button> */}
            <button className='startButton heroBtn' onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}> <b> Start Now</b> </button>
            </div>
            <div className="hero1-right">
                <img className='hero1img' src={Hero1img} alt="" />
            </div>
        </section>
    )
}

export default Hero1