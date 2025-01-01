import React from 'react';
import './MissionStatement.css';

const MissionStatement = () => {
  return (
    <section className="mission-container">
      <div className="mission-content">
        <div className="mission-icon">
          <svg viewBox="0 0 100 100" width="40" height="40">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="5"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="5"/>
            <circle cx="50" cy="50" r="15" fill="white"/>
          </svg>
        </div>
        <h1 className="mission-title">Our Mission</h1>
        <p className="mission-text">
        "Empowering your fitness journey with personalized online yoga classes, our React-based platform connects you with expert tutors specializing in diverse practices, ensuring a tailored wellness experience from the comfort of your home."
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;