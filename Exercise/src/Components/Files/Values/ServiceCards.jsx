import React from 'react';
import './ServiceCards.css';

const ServiceCards = () => {
  return (
    <div className="service-container">
      <div className='valuehead'>
        <h1>Our Values</h1>
      </div>
      <div className="service-card">
        <div className="icon-circle blue">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <h2 className="card-title blue-text"> Personalization </h2>
        <p className="card-description">
        Offering customized yoga classes to meet individual needs and goals.
        </p>
      </div>

      <div className="service-card">
        <div className="icon-circle green">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <h2 className="card-title green-text">Accessibility </h2>
        <p className="card-description">
        Delivering seamless online sessions for convenience and flexibility.
        </p>
      </div>

      <div className="service-card">
        <div className="icon-circle cyan">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h2 className="card-title cyan-text"> Expertise </h2>
        <p className="card-description">
        Connecting users with certified tutors across diverse yoga disciplines.
        </p>
      </div>
    </div>
  );
};

export default ServiceCards;