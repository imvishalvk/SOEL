import React, { useState } from 'react';
import './FAQSection.css';
import faqImg1 from '../../assets/Images/student studiying.png'
import faqImg2 from '../../assets/Images/Studying/kid.png'

const faqData = [
  {
    question: "What Is The School Of Experiential Learning (SoEL)?",
    answer: "SoEL is an innovative platform focused on hands-on learning and real-world application."
  },
  {
    question: "Who Can Join This Program?",
    answer: "Our programs are designed for curious students looking to expand beyond traditional curriculum."
  },
  {
    question: "What Subjects And Skills Are Covered?",
    answer: "We cover a range of STEM, soft skills, and creative problem-solving modules."
  },
  {
    question: "What Makes SoEL Different From Traditional Tutoring?",
    answer: "Unlike conventional coaching, SoEL integrates experiential and applied learning through real-world projects, mentorship, and AI support. Students receive personalized academic guidance, career exposure, and the chance to participate in national and international competitions."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="faq-container">
      <div className="faq-content">
        <div className="faq-left">
          <span className="faq-tag">FAQ'S</span>
          <h2 className="faq-title">
            Always Be Concerned For <span className="text-cyan">Your</span> 
            <br /> 
            <span className="text-cyan">Successor's</span> <span className="text-highlight">Powerful Minds</span>
          </h2>

          <div className="accordion">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="accordion-header">
                  <span className="question-text">{item.question}</span>
                  <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="faq-right">
          <div className="image-stack">
            <img 
              src={faqImg1}
              alt="Learning" 
              className="img-back"
            />
            <img 
              src={faqImg2}
              alt="Student" 
              className="img-front"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;