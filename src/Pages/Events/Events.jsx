import React, { useState, useEffect } from 'react';
import '../Common CSS/ComingSoon.css';
import Header from '../../Components/header/Header';
import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  
  // Target launch date (Adjust as needed)
  const launchDate = new Date('2027-01-01T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  // Helper to format numbers with a leading zero
  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="luxury-container">
        <Header/>
      {/* Background Aesthetic Layers */}
      <div className="luxury-overlay"></div>
      <div className="luxury-glow"></div>

      {/* Main Content */}
      <main className="luxury-content">
        <header className="luxury-header">
          <p className="luxury-tagline">THE NEXT CHAPTER</p>
          <h1 className="luxury-brand">SOEL Events</h1>
        </header>

        <section className="luxury-body">
          <h2 className="luxury-headline">A New Standard of Events</h2>
          <p className="luxury-description">
            We are crafting an exclusive digital experience. Something exceptional is dynamic, precise, and meticulously designed just for you.
          </p>
        </section>

        {/* Countdown Timer */}
        <section className="luxury-countdown">
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.days)}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-divider">:</div>
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.hours)}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-divider">:</div>
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.minutes)}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-divider">:</div>
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.seconds)}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </section>

        {/* Newsletter Signup */}
        <footer className="luxury-footer">
          {!submitted ? (
            <form className="luxury-form" onSubmit={handleSubmit}>
              {/* <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL FOR AN EXCLUSIVE INVITATION" 
                className="luxury-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /> */}
              <button 
  className='startButton nav-btn' 
  onClick={() => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }}>
               <b> Explore other programs</b>
              </button>
            </form>
          ) : (
            <p className="luxury-success-message">You have been added to the private registry.</p>
          )}
        </footer>
      </main>
    </div>
  );
};

export default Event;
