// import React from 'react'
// import './speciality.css'
// import { Star } from 'lucide-react'


// const SpecialityCard = ({ tutor }) => {
//   return (
//     <div className="cardcontainer">
//     <div className="profile-card">
//       <div className="profile-image-container">
//         <div 
//           className="image-placeholder"
//           style={{ 
//             background: tutor.image ? `url(${tutor.image})` : '',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//           }}
//         >
//         </div>
//       </div>
//       <div className="profile-info">
//         <h3 className="profile-name">{tutor.name}</h3>
//         <div className="reviews">
//           <Star className="star-icon" fill="#FFD700" color="#FFD700" size={16} />
//           <span className="rating">4.9</span>
//           <span className="review-count">(25 reviews)</span>
//         </div>
//         <div className="profile-details">
//           <div className="detail">
//             <span className="label">Speciality:</span>
//             <span className="value">{tutor.speciality}</span>
//           </div>
//           <div className="detail">
//             <span className="label">Fee:</span>
//             <span className="value">${tutor.fees}</span>
//           </div>
//           <div className="detail">
//             <span className="label">Experience:</span>
//             <span className="value">{tutor.experience}</span>
//           </div>
//         </div>
//         <button className="contact-button">Book Class</button>
//         <div className="extra-info">1st class free</div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default SpecialityCard



import React from 'react';
import './speciality.css';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SpecialityCard = ({ tutor }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/speciality/${encodeURIComponent(tutor.speciality)}`);
  };

  return (
    <div className="cardcontainer">
      <div className="profile-card">
        <div className="profile-image-container">
          <div 
            className="image-placeholder"
            style={{ 
              background: tutor.image ? `url(${tutor.image})` : '',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{tutor.name}</h3>
          <div className="reviews">
            <Star className="star-icon" fill="#FFD700" color="#FFD700" size={16} />
            <span className="rating">4.9</span>
            <span className="review-count">(25 reviews)</span>
          </div>
          <div className="profile-details">
            <div className="detail">
              <span className="label">Speciality:</span>
              <span className="value">{tutor.speciality}</span>
            </div>
            <div className="detail">
              <span className="label">Fee:</span>
              <span className="value">${tutor.fees}</span>
            </div>
            <div className="detail">
              <span className="label">Experience:</span>
              <span className="value">{tutor.experience}</span>
            </div>
          </div>
          <button className="contact-button" onClick={handleBooking}>Book Class</button>
          <div className="extra-info">1st class free</div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
