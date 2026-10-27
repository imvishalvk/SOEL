import './about.css'
import teacher from '../../assets/Images/teacher teaching.png'
import student from '../../assets/Images/student studiying.png'
import bg from '../../assets/Images/Shapes/about-bg-1.png'

function About() {
  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/>
    </svg>
  );

  return (
    <section className='about' id='about'>
      <img src={bg} className='aboutBg' alt="" />
      <div className="container">
        
        <div className="left">
          <img src={teacher} className='teacher' alt="Teacher" />
          <img src={student} className='student' alt="Student" />
        </div>

        <div className="right">
          <p className="sub-tag">About US</p>
          <h2>We are the only platform Inspired by Top countries</h2>
          <p className="description">
            Global recognition with awards and certifications worth ₹100,000, 
            fostering academic excellence through on demanding courses, experiential learning...
          </p>

          <div className="rightBox">
            <ul className="about-list">
              <li>{checkIcon} Personalized academic support</li>
              <li>{checkIcon} Passionate & experienced trainers</li>
              <li>{checkIcon} Globally inspired curriculum</li>
            </ul>
            <div className="line"></div>
            <button className='startButton' onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} ><b>Start Now</b></button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About