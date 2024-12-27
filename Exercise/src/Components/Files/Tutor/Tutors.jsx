// // import React, { useState, useContext, useEffect } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { AContext } from '../Context/AppContext';
// // import './Tutor.css';

// // const Tutors = () => {
// //   const { speciality } = useParams(); 
// //   const [filterDoc, setFilterDoc] = useState([]); 
// //   const { data } = useContext(AContext);
// //   const navigate = useNavigate();
// //   const applyFilter = () => {
// //     if (speciality) {
// //       setFilterDoc(
// //         data.filter(doc =>
// //           doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
// //         )
// //       );
// //     } else {
// //       setFilterDoc(data);
// //     }
// //   };
// //   useEffect(() => {
// //     applyFilter();
// //   }, [data, speciality]);

// //   return (
// //     <div className="container">
// //       <p>Browse through the specialist tutors</p>
// //       <div className="special">
// //         <p
// //           onClick={() =>
// //             speciality === 'Sports Therapists'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Sports Therapists')}`)
// //           }
// //         >
// //           Sports Therapists
// //         </p>
// //         <p
// //           onClick={() =>
// //             speciality === 'Geriatric Exercise'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Geriatric Exercise')}`)
// //           }
// //         >
// //           Geriatric Exercise
// //         </p>
// //         <p
// //           onClick={() =>
// //             speciality === 'Aquatic Therapy'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Aquatic Therapy')}`)
// //           }
// //         >
// //           Aquatic Therapy
// //         </p>
// //         <p
// //           onClick={() =>
// //             speciality === 'Neurological Rehabilitation'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Neurological Rehabilitation')}`)
// //           }
// //         >
// //           Neurological Rehabilitation
// //         </p>
// //         <p
// //           onClick={() =>
// //             speciality === 'Clinical Exercise'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Clinical Exercise')}`)
// //           }
// //         >
// //           Clinical Exercise
// //         </p>
// //         <p
// //           onClick={() =>
// //             speciality === 'Rehabilitation'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Rehabilitation')}`)
// //           }
// //         >
// //           Rehabilitation
// //         </p>
// //         <p
// //           onClick={() =>
// //             speciality === 'Pediatric Exercise'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Pediatric Exercise')}`)
// //           }
// //         >
// //           Pediatric Exercise
// //         </p>
// //         <p
// //           onClick={() =>
// //             speciality === 'Occupational Therapy'
// //               ? navigate('/Tutors')
// //               : navigate(`/Tutors/${encodeURIComponent('Occupational Therapy')}`)
// //           }
// //         >
// //           Occupational Therapy
// //         </p>
// //       </div>
// //       <div className="Tutor">
// //         {filterDoc.map(item => (
// //           <div
// //             onClick={() => navigate(`/Appointment/${item._id}`)}
// //             key={item._id}
// //             className="items"
// //           >
// //             <div className="content">
// //               <div style={{ position: 'relative' }}>
// //                 <img src={item.image} alt={item.name} />
// //                 <div className="status">
// //                   <p>Available</p>
// //                 </div>
// //               </div>
// //               <h2>{item.name}</h2>
// //               <p>{item.speciality}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Tutors;


// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Tutor.css';
// import { AContext } from '../Context/AppContext'; // Import the context

// const Tutors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const { data } = useContext(AContext); // Access data from context
//   const navigate = useNavigate();

//   // Apply the filter logic based on speciality
//   const applyFilter = () => {
//     if (speciality) {
//       const filtered = data.filter(doc =>
//         doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
//       );
//       setFilterDoc(filtered);
//     } else {
//       setFilterDoc(data);
//     }
//   };

//   // Apply filter whenever the speciality or data changes
//   useEffect(() => {
//     if (data && data.length > 0) {
//       applyFilter();
//     }
//   }, [data, speciality]);

//   return (
//     <div className="container">
//       <p>Browse through the specialist tutors</p>
//       <div className="special">
//         {['Sports Therapists', 'Geriatric Exercise', 'Aquatic Therapy',
//           'Neurological Rehabilitation', 'Clinical Exercise',
//           'Rehabilitation', 'Pediatric Exercise', 'Occupational Therapy'].map(special => (
//           <p
//             key={special}
//             onClick={() =>
//               speciality === special
//                 ? navigate('/Tutors')
//                 : navigate(`/Tutors/${encodeURIComponent(special)}`)
//             }
//           >
//             {special}
//           </p>
//         ))}
//       </div>
//       <div className="Tutor">
//         {filterDoc.length === 0 ? (
//           <div>No tutors found for this speciality</div>
//         ) : (
//           filterDoc.map(item => (
//             <div
//               onClick={() => navigate(`/Appointment/${item._id}`)}
//               key={item._id}
//               className="items"
//             >
//               <div className="content">
//                 <div style={{ position: 'relative' }}>
//                   <img src={item.image} alt={item.name} />
//                   <div className="status">
//                     <p>Available</p>
//                   </div>
//                 </div>
//                 <h2>{item.name}</h2>
//                 <p>{item.speciality}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tutors;


// latest working code
// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Tutor.css';
// import { AContext } from '../Context/AppContext';

// const Tutors = () => {
//   const { speciality } = useParams(); // Get speciality from URL params
//   const [filterDoc, setFilterDoc] = useState([]);
//   const { tutorsData } = useContext(AContext); // Access tutorsData from context
//   const navigate = useNavigate();

//   // Debugging logs
//   console.log('Speciality:', speciality); // Check the URL parameter
//   console.log('Tutors Data:', tutorsData); // Check if tutorsData is populated correctly

//   // Apply the filter logic based on speciality
//   const applyFilter = () => {
//     if (speciality) {
//       const filtered = tutorsData.filter((doc) =>
//         doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
//       );
//       setFilterDoc(filtered);
//     } else {
//       setFilterDoc(tutorsData); // Show all tutors if no speciality filter is provided
//     }
//   };

//   // Apply filter whenever the speciality or tutorsData changes
//   useEffect(() => {
//     if (tutorsData && tutorsData.length > 0) {
//       applyFilter();
//     }
//   }, [tutorsData, speciality]);

//   // Check if data is loading or empty
//   if (tutorsData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <p>Browse through the specialist tutors</p>
//       <div className="special">
//         {['Sports Therapists', 'Geriatric Exercise', 'Aquatic Therapy', 
//           'Neurological Rehabilitation', 'Clinical Exercise', 'Rehabilitation', 
//           'Pediatric Exercise', 'Occupational Therapy'].map((special) => (
//             <p
//               key={special}
//               onClick={() =>
//                 speciality === special
//                   ? navigate('/Tutors') // Go to base Tutors page
//                   : navigate(`/Tutors/${encodeURIComponent(special)}`) // Filter tutors by speciality
//               }
//             >
//               {special}
//             </p>
//         ))}
//       </div>

//       <div className="Tutor">
//         {filterDoc.length === 0 ? (
//           <div>No tutors found for this speciality</div> 
//         ) : (
//           filterDoc.map((item) => (
//             <div
//               onClick={() => navigate(`/Appointment/${item._id}`)}
//               key={item._id}
//               className="items"
//             >
//               <div className="content">
//                 <div style={{ position: 'relative' }}>
//                   <img src={item.image} alt={item.name} />
//                   <div className="status">
//                     <p>Available</p>
//                   </div>
//                 </div>
//                 <h2>{item.name}</h2>
//                 <p>{item.speciality}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tutors;


// running 
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
                  <div className="status">
                    <p>Available</p>
                  </div>
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


// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AContext } from "../Context/AppContext";

// const Tutors = () => {
//   const { tutorsData } = useContext(AContext);
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <h2>Available Tutors</h2>
//       <div className="tutors-list">
//         {tutorsData.map((tutor) => (
//           <div
//             key={tutor._id}
//             className="tutor-card"
//             onClick={() => navigate(`/Appointment/${tutor._id}`)}
//           >
//             <img src={tutor.image} alt={tutor.name} />
//             <h3>{tutor.name}</h3>
//             <p>{tutor.speciality}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tutors;





// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './Tutor.css';
// import { AContext } from '../Context/AppContext';

// const Tutors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { tutors, setTutors } = useContext(AContext);
//   const navigate = useNavigate();

//   const backendUrl = 'http://localhost:4000';

//   // Fetch tutors data from the backend
//   const fetchTutors = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await axios.get(`${backendUrl}/api/tutor/list`);
      
//       if (!response.data) {
//         throw new Error('No data received from server');
//       }
      
//       setTutors(response.data);
      
//       // Apply initial filtering
//       if (speciality) {
//         const filtered = response.data.filter((doc) =>
//           doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
//         );
//         setFilterDoc(filtered);
//       } else {
//         setFilterDoc(response.data);
//       }
      
//     } catch (err) {
//       console.error('Error fetching tutors:', err);
//       setError(err.response?.data?.message || 'Failed to fetch tutors. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch tutors when component mounts
//   useEffect(() => {
//     fetchTutors();
//   }, []);

//   // Apply filter when speciality changes
//   useEffect(() => {
//     if (tutors?.length) {
//       if (speciality) {
//         const filtered = tutors.filter((doc) =>
//           doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
//         );
//         setFilterDoc(filtered);
//       } else {
//         setFilterDoc(tutors);
//       }
//     }
//   }, [speciality, tutors]);

//   const specialities = [
//     'Sports Therapists',
//     'Geriatric Exercise', 
//     'Aquatic Therapy',
//     'Neurological Rehabilitation',
//     'Clinical Exercise',
//     'Rehabilitation',
//     'Pediatric Exercise',
//     'Occupational Therapy'
//   ];

//   // Loading state with retry option
//   if (loading) {
//     return (
//       <div className="container">
//         <div className="loading-state">
//           <p>Loading tutors...</p>
//           <div className="loading-spinner"></div>
//         </div>
//       </div>
//     );
//   }

//   // Error state with retry option
//   if (error) {
//     return (
//       <div className="container">
//         <div className="error-state">
//           <p>{error}</p>
//           <button onClick={fetchTutors} className="retry-button">
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <p>Browse through the specialist tutors</p>
//       <div className="special">
//         {specialities.map((special) => (
//           <p
//             key={special}
//             onClick={() =>
//               speciality === special
//                 ? navigate('/Tutors')
//                 : navigate(`/Tutors/${encodeURIComponent(special)}`)
//             }
//             className={speciality === special ? 'active' : ''}
//           >
//             {special}
//           </p>
//         ))}
//       </div>

//       <div className="Tutor">
//         {filterDoc.length === 0 ? (
//           <div className="no-results">
//             <p>No tutors found {speciality ? `for ${speciality}` : ''}</p>
//           </div>
//         ) : (
//           filterDoc.map((item) => (
//             <div
//               onClick={() => navigate(`/Appointment/${item._id}`)}
//               key={item._id}
//               className="items"
//             >
//               <div className="content">
//                 <div style={{ position: 'relative' }}>
//                   <img 
//                     src={item.image} 
//                     alt={item.name}
//                     onError={(e) => {
//                       e.target.src = '/placeholder-tutor.png'; // Fallback image
//                     }}
//                   />
//                   <div className="status">
//                     <p>Available</p>
//                   </div>
//                 </div>
//                 <h2>{item.name}</h2>
//                 <p>{item.speciality}</p>
//                 <p className="experience">{item.experience} years experience</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tutors;


