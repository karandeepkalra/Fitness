// import React, { useContext } from 'react';
// import { AContext } from '../Context/AppContext';
// import { useNavigate } from 'react-router-dom';
// import './Toptutors.css';

// const Toptutors = () => {
//   const navigate = useNavigate();
//   const { data: tutorsData } = useContext(AContext); // Ensure `data` matches context naming
//   console.log('Tutors Data:', tutorsData)
//   return (
//     <div className="container">
//       <h1>Top Tutors to Book</h1>
//       <p>Simply browse through our extensive list of trusted tutors.</p>
//       <div className="toptutors-grid">
//   {tutorsData?.length > 0 ? (
//     tutorsData.slice(0, 8).map((tutor) => (
//       <div
//         key={tutor._id}
//         className="tutor-card"
//         onClick={() => navigate(`Appointment/${tutor._id}`)}
//       >
//         <div className="content">
//           <div style={{ position: 'relative' }}>
//             <img src={tutor.image || 'https://via.placeholder.com/150'} alt={tutor.name} />
//             <div className="status">
//               <p>Available</p>
//             </div>
//           </div>
//           <h2>{tutor.name}</h2>
//           <p>{tutor.speciality}</p>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p>No tutors available</p>
//   )}
// </div>

//       <button className="btn1" onClick={() => navigate('/Tutors')}>
//         More
//       </button>
//     </div>
//   );
// };

// export default Toptutors;

import React, { useContext, useEffect } from 'react';
import { AContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import './Toptutors.css';

const Toptutors = () => {
  const navigate = useNavigate();
  const { tutorsData, loading } = useContext(AContext); // Access tutorsData and loading from context

  // Log tutorsData to check if it's correct
  useEffect(() => {
    console.log('Tutors Data:', tutorsData);
  }, [tutorsData]);


  
  return (
    <div className="containerss">
      <h1>Top Tutors to Book</h1>
      <p>Simply browse through our extensive list of trusted tutors.</p>
      <div className="toptutors-gridss">
        {tutorsData && tutorsData.length > 0 ? (
          tutorsData.slice(0, 8).map((tutor) => {
            console.log('Speciality:', tutor.speciality); // Log speciality to see if it's defined
            
            return (
              <div
                key={tutor._id}
                className="tutor-cardss"
                onClick={() => navigate(`Appointment/${tutor._id}`)}
              >
                <div className="contentss">
                  <div style={{ position: 'relative' }}>
                    <img
                      src={tutor.image || 'https://via.placeholder.com/150'}
                      alt={tutor.name}
                    />
                    <div className="statusss">
                      <p>Available</p>
                    </div>
                  </div>
                  <h2>{tutor.name}</h2>
                  <p>{tutor.speciality ? tutor.speciality : 'Speciality not available'}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No tutors available</p>
        )}
      </div>

      <button className="btn3" onClick={() => navigate('/Tutors')}>
        More
      </button>
    </div>
  );
};

export default Toptutors;
