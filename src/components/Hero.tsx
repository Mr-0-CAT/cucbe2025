import React from 'react';
import heroImage from '../1000_F_235823402_PJjvwUxEltYW3l6NrjaAPTkWgiJOLUOb.jpg';
import mobileHeroImage from '../hte7nzo65mlcpq7516vf1tn5mf4q_1562758353_Vidhana_Soudha_.avif';

const Hero = () => {
  return (
    <div 
      className="bng" 
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="idk">
        <div className="cuc">
          <h1>CCUBE 25</h1>
          <p className="fade-in-up">4th IEEE International Conference on Circuits, Controls and Communication</p>
          <div className="mt-4 animated fadeIn" style={{animationDelay: '0.6s'}}>
            <a href="#about" className="btn btn-light btn-lg rounded-pill fade-in-left" style={{animationDelay: '0.8s'}}>Learn More</a>
            <a 
              href="https://cmt3.research.microsoft.com/CCUBE2025/Submission/Index" 
              className="btn btn-secondary btn-lg rounded-pill fade-in-right pulse" 
              style={{animationDelay: '1s'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 767px) {
          .bng {
            background-image: url(${mobileHeroImage}) !important;
            background-size: contain !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;