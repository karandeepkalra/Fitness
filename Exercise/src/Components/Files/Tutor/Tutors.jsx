import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AContext } from '../Context/AppContext';
import './Tutor.css';

const Tutors = () => {
  const { speciality } = useParams(); 
  const [filterDoc, setFilterDoc] = useState([]); 
  const { data } = useContext(AContext);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        data.filter(doc =>
          doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
        )
      );
    } else {
      setFilterDoc(data);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [data, speciality]);

  return (
    <div className="container">
      <p>Browse through the specialist tutors</p>
      <div className="special">
        <p
          onClick={() =>
            speciality === 'Sports Therapists'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Sports Therapists')}`)
          }
        >
          Sports Therapists
        </p>
        <p
          onClick={() =>
            speciality === 'Geriatric Exercise'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Geriatric Exercise')}`)
          }
        >
          Geriatric Exercise
        </p>
        <p
          onClick={() =>
            speciality === 'Aquatic Therapy'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Aquatic Therapy')}`)
          }
        >
          Aquatic Therapy
        </p>
        <p
          onClick={() =>
            speciality === 'Neurological Rehabilitation'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Neurological Rehabilitation')}`)
          }
        >
          Neurological Rehabilitation
        </p>
        <p
          onClick={() =>
            speciality === 'Clinical Exercise'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Clinical Exercise')}`)
          }
        >
          Clinical Exercise
        </p>
        <p
          onClick={() =>
            speciality === 'Rehabilitation'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Rehabilitation')}`)
          }
        >
          Rehabilitation
        </p>
        <p
          onClick={() =>
            speciality === 'Pediatric Exercise'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Pediatric Exercise')}`)
          }
        >
          Pediatric Exercise
        </p>
        <p
          onClick={() =>
            speciality === 'Occupational Therapy'
              ? navigate('/Tutors')
              : navigate(`/Tutors/${encodeURIComponent('Occupational Therapy')}`)
          }
        >
          Occupational Therapy
        </p>
      </div>
      <div className="Tutor">
        {filterDoc.map(item => (
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
    </div>
  );
};

export default Tutors;
