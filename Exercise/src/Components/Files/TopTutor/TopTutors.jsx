import React, { useContext, useEffect, useState } from 'react';
import { AContext } from '../Context/AppContext';
import './TopTutors.css';
import { useNavigate } from 'react-router-dom';

const TopTutors = () => {
  const navigate = useNavigate();
  const { tutors, getAllTutors } = useContext(AContext);
  const [showAllTutors, setShowAllTutors] = useState(false);
  const [displayedTutors, setDisplayedTutors] = useState([]);

  useEffect(() => {
    getAllTutors();
  }, []);

  useEffect(() => {
    if (tutors) {
      // Set initial display to first 4 tutors
      setDisplayedTutors(tutors.slice(0, 3));
    }
  }, [tutors]);

  const handleViewMore = () => {
    if (!showAllTutors) {
      // Show all tutors
      setDisplayedTutors(tutors);
      setShowAllTutors(true);
    } else {
      // Reset to show only 4 tutors
      setDisplayedTutors(tutors.slice(0, 3));
      setShowAllTutors(false);
    }
  };

  return (
    <div className="tutors-container">
      <div className="tutors-header">
        <h1>Top Tutors to Book</h1>
        <p>Simply browse through our extensive list of trusted tutors.</p>
      </div>
      
      <div className="tutors-grid">
        {displayedTutors.map((tutor, index) => (
          <div 
            key={index} 
            className="tutor-card"
            onClick={() => navigate(`/Appointment/${tutor._id}`)}
          >
            <div className="tutor-image-container">
              <img 
                src={tutor.image || 'https://via.placeholder.com/300x400'} 
                alt={tutor.name} 
                className="tutor-image"
              />
            </div>
            <div className="tutor-info">
              <h3>{tutor.name}</h3>
              <p>{tutor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="view-more-btn"
        onClick={handleViewMore}
      >
        {showAllTutors ? 'Show Less' : 'View More'}
      </button>
    </div>
  );
};

export default TopTutors;














