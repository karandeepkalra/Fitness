import React, { useContext, useEffect, useState } from 'react';
import { AContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Relatedtutors = ({TutorId,speciality}) => {
  const navigate = useNavigate();
  const { tutors } = useContext(AContext);
  const [tut, settut] = useState([]);

  useEffect(() => {
    if (tutors.length > 0 && speciality) {
      const tutdata = tutors.filter(
        (doc) => doc.speciality === speciality && doc._id !== TutorId
      );
      settut(tutdata);
    }
  }, [tutors, speciality, TutorId]);

  return (
    <div className="container">
      <h1>Top Tutors to Book</h1>
      <p>Simply browse through our extensive list of trusted tutors.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tut.slice(0, 8).map((item) => (
          <div
            onClick={() => navigate(`/Appointment/${item._id}`)}
            key={item._id}
            className="items"
          >
            <div className="content">
              <div style={{ position: 'relative' }}>
                <img src={item.image} alt={item.name} />
                <div className="status">
                  <p>Available</p>
                </div>
              </div>
              <h2>{item.name}</h2>
              <p>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn1" onClick={() => navigate('/Tutors')}>
        More
      </button>
    </div>
  );
};

export default Relatedtutors;

