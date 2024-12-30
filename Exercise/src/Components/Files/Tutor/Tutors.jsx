import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Tutor.css';
import { AContext } from '../Context/AppContext';

const Tutors = () => {
  const { speciality } = useParams(); // Get speciality from URL params
  const [filterDoc, setFilterDoc] = useState([]);
  const { tutors, getAllTutors } = useContext(AContext); // Access tutors data and fetch function from context
  const navigate = useNavigate();

  // Debugging logs
  console.log('Speciality:', speciality); // Check the URL parameter
  console.log('Tutors Data:', tutors); // Check if tutors data is populated correctly

  // Apply the filter logic based on speciality
  const applyFilter = () => {
    if (speciality) {
      const filtered = tutors.filter((doc) =>
        doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
      );
      setFilterDoc(filtered);
    } else {
      setFilterDoc(tutors); // Show all tutors if no speciality filter is provided
    }
  };

  // Fetch all tutors and apply filters
  useEffect(() => {
    getAllTutors(); // Fetch tutors from the backend
  }, []);

  useEffect(() => {
    if (tutors && tutors.length > 0) {
      applyFilter();
    }
  }, [tutors, speciality]);

  // Check if data is loading or empty
  if (tutors.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <p>Browse through the specialist tutors</p>
      <div className="special">
        {['Sports Therapists', 'Geriatric Exercise', 'Aquatic Therapy', 
          'Neurological Rehabilitation', 'Clinical Exercise', 'Rehabilitation', 
          'Pediatric Exercise', 'Occupational Therapy'].map((special) => (
            <p
              key={special}
              onClick={() =>
                speciality === special
                  ? navigate('/Tutors') // Go to base Tutors page
                  : navigate(`/Tutors/${encodeURIComponent(special)}`) // Filter tutors by speciality
              }
            >
              {special}
            </p>
        ))}
      </div>

      <div className="Tutor">
        {filterDoc.length === 0 ? (
          <div>No tutors found for this speciality</div> 
        ) : (
          filterDoc.map((item) => (
            <div
              onClick={() => navigate(`/Appointment/${item._id}`)}
              key={item._id}
              className="items"
            >
              <div className="content">
                <div style={{ position: 'relative' }}>
                  <img src={item.image} alt={item.name} />
                  {/* <div className="status">
                    <p>Available</p>
                  </div> */}
                </div>
                <h2>{item.name}</h2>
                <p>{item.speciality}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tutors;