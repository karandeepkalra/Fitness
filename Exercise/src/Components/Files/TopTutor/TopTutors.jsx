// // import React, { useContext } from 'react'
// // import { AContext } from '../Context/AppContext'
// // import './TopTutors.css'
// // import {useNavigate} from 'react-router-dom'

// // const TopTutors = () => {
// //   const navigate=useNavigate();
// //   const {data}=useContext(AContext)
// //    return (
// //      <div className="container">
// //          <h1>Top Tutors to Book</h1>
// //          <p>Simply browse through our Extensive list of trusted Tutors.</p>
// //          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
// //              {data.slice(0, 8).map((item) => (
// //                <div onClick={()=>navigate(`Appointment/${item._id}`)} key={item._id} className="items">
// //                  <div className="content">
// //                    <div style={{position: 'relative'}}>
// //                      <img src={item.image} alt={item.name} />
// //                      <div className="status">
// //                        <p>Available</p>
// //                      </div>
// //                    </div>
// //                    <h2>{item.name}</h2>
// //                    <p>{item.speciality}</p>
// //                  </div>
// //                </div>
// //              ))}
// //          </div>
// //          <button className='btn1' onClick={()=>{navigate('/Tutors')}}>more</button>
// //      </div>
// //    )
// // }

// // export default TopTutors

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



// // Toptutors.jsx
// import React, { useContext } from 'react';
// import { AContext } from '../Context/AppContext';
// import { useNavigate } from 'react-router-dom';
// import './Toptutors.css';

// const Toptutors = () => {
//   const navigate = useNavigate();
//   const { tutorsData } = useContext(AContext); // Access tutorsData from context

//   // Ensure tutorsData is available and not undefined
//   console.log('Tutors Data:', tutorsData);

//   return (
//     <div className="containerss">
//       <h1>Top Tutors to Book</h1>
//       <p>Simply browse through our extensive list of trusted tutors.</p>
//       <div className="toptutors-gridss">
//         {tutorsData && tutorsData.length > 0 ? (
//           tutorsData.slice(0, 8).map((tutor) => (
//             <div
//               key={tutor._id}
//               className="tutor-cardss"
//               onClick={() => navigate(`Appointment/${tutor._id}`)}
//             >
//               <div className="contentss">
//                 <div style={{ position: 'relative' }}>
//                   <img src={tutor.image || 'https://via.placeholder.com/150'} alt={tutor.name} />
//                   <div className="statusss">
//                     <p>Available</p>
//                   </div>
//                 </div>
//                 <h2>{tutor.name}</h2>
//                 <p>{tutor.speciality}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No tutors available</p>
//         )}
//       </div>

//       <button className="btn3" onClick={() => navigate('/Tutors')}>
//         More
//       </button>
//     </div>
//   );
// };

// export default Toptutors;



// import React, { useContext } from 'react';
// import { AContext } from '../Context/AppContext';
// import { useNavigate } from 'react-router-dom';
// import './Toptutors.css';

// const Toptutors = () => {
//   const navigate = useNavigate();
//   const { tutorsData } = useContext(AContext); // Access tutorsData from context

//   // Ensure tutorsData is available and not undefined
//   console.log('Tutors Data:', tutorsData);

//   return (
//     <div className="containerss">
//       <h1>Top Tutors to Book</h1>
//       <p>Simply browse through our extensive list of trusted tutors.</p>
//       <div className="toptutors-gridss">
//         {tutorsData && tutorsData.length > 0 ? (
//           tutorsData.slice(0, 8).map((tutor) => (
//             <div
//               key={tutor._id}
//               className="tutor-cardss"
//               onClick={() => navigate(`Appointment/${tutor._id}`)}
//             >
//               <div className="contentss">
//                 <div style={{ position: 'relative' }}>
//                   <img src={tutor.image || 'https://via.placeholder.com/150'} alt={tutor.name} />
//                   <div className="statusss">
//                     <p>Available</p>
//                   </div>
//                 </div>
//                 <h2>{tutor.name}</h2>
//                 <p>{tutor.speciality}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No tutors available</p>
//         )}
//       </div>

//       <button className="btn3" onClick={() => navigate('/Tutors')}>
//         More
//       </button>
//     </div>
//   );
// };

// export default Toptutors;



// latest working code
// // Toptutors.jsx
// import React, { useContext, useEffect } from 'react';
// import { AContext } from '../Context/AppContext';
// import { useNavigate } from 'react-router-dom';
// import './Toptutors.css';

// const Toptutors = () => {
//   const navigate = useNavigate();
//   const { tutorsData, loading } = useContext(AContext); // Access tutorsData and loading from context

//   // Log tutorsData to check if it's correct
//   useEffect(() => {
//     console.log('Tutors Data:', tutorsData);
//   }, [tutorsData]);


  
//   return (
//     <div className="containerss">
//       <h1>Top Tutors to Book</h1>
//       <p>Simply browse through our extensive list of trusted tutors.</p>
//       <div className="toptutors-gridss">
//         {tutorsData && tutorsData.length > 0 ? (
//           tutorsData.slice(0, 8).map((tutor) => {
//             console.log('Speciality:', tutor.speciality); // Log speciality to see if it's defined
            
//             return (
//               <div
//                 key={tutor._id}
//                 className="tutor-cardss"
//                 onClick={() => navigate(`Appointment/${tutor._id}`)}
//               >
//                 <div className="contentss">
//                   <div style={{ position: 'relative' }}>
//                     <img
//                       src={tutor.image || 'https://via.placeholder.com/150'}
//                       alt={tutor.name}
//                     />
//                     <div className="statusss">
//                       <p>Available</p>
//                     </div>
//                   </div>
//                   <h2>{tutor.name}</h2>
//                   <p>{tutor.speciality ? tutor.speciality : 'Speciality not available'}</p>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p>No tutors available</p>
//         )}
//       </div>

//       <button className="btn3" onClick={() => navigate('/Tutors')}>
//         More
//       </button>
//     </div>
//   );
// };

// export default Toptutors;


// video - written code
// import React from 'react'
// import { useContext } from 'react'
// import AppContext from '../Context/AppContext'
// import { useEffect } from 'react'

// const TopTutors = () => {
// const {tutors,getAllTutors} =useContext(AppContext)
  

// useEffect(()=>{
//    getAllTutors()
// },[])
//   return (
//     <div>
//       <h1>All Tutors</h1>
//       <div>
//         {
//           tutors.map((item,index)=>(
//             <div key = {index}>
//               <img src={item.image} alt="" />
//               <div>
//                 <p>{item.name}</p>
//                 <p>{item.speciality}</p>
//                 <div>
//                   <input type="checkbox" checked={item.available}/>
//                   <p>Available</p>
//                 </div>
//                 </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default TopTutors



// import React, { useContext, useEffect } from 'react';
// import { AContext } from '../Context/AppContext'; // Use AContext here

// const TopTutors = () => {
//   const { tutors, getAllTutors } = useContext(AContext);

//   useEffect(() => {
//     getAllTutors(); // Fetch tutors data from the backend
//   }, []);

//   return (
//     <div>
//       <h1>All Tutors</h1>
//       <div>
//         {tutors.map((item, index) => (
//           <div key={index}>
//             <img src={item.image} alt="" />
//             <div>
//               <p>{item.name}</p>
//               <p>{item.speciality}</p>
//               <div>
//                 <input type="checkbox" checked={item.available} />
//                 <p>Available</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopTutors;



// import React, { useContext, useEffect } from 'react';
// import { AContext } from '../Context/AppContext';
// import './TopTutors.css';
// import { useNavigate } from 'react-router-dom';

// const TopTutors = () => {
//   const navigate = useNavigate();
//   const { tutors, getAllTutors } = useContext(AContext);

//   useEffect(() => {
//     getAllTutors();
//   }, []);

//   return (
//     <div className="tutors-container">
//       <div className="tutors-header">
//         <h1>Top Tutors to Book</h1>
//         <p>Simply browse through our extensive list of trusted tutors.</p>
//       </div>
      
//       <div className="tutors-grid">
//         {tutors && tutors.map((tutor, index) => (
//           <div 
//             key={index} 
//             className="tutor-card"
//             onClick={() => navigate(`/Appointment/${tutor._id}`)}
//           >
//             <div className="tutor-image-container">
//               <img 
//                 src={tutor.image || 'https://via.placeholder.com/300x400'} 
//                 alt={tutor.name} 
//                 className="tutor-image"
//               />
//               <div className="availability-badge">
//                 <span>Available</span>
//               </div>
//             </div>
//             <div className="tutor-info">
//               <h3>{tutor.name}</h3>
//               <p>{tutor.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <button 
//         className="view-more-btn"
//         onClick={() => navigate('/Tutors')}
//       >
//         View More
//       </button>
//     </div>
//   );
// };

// export default TopTutors;


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
      setDisplayedTutors(tutors.slice(0, 4));
    }
  }, [tutors]);

  const handleViewMore = () => {
    if (!showAllTutors) {
      // Show all tutors
      setDisplayedTutors(tutors);
      setShowAllTutors(true);
    } else {
      // Reset to show only 4 tutors
      setDisplayedTutors(tutors.slice(0, 4));
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
              <div className="availability-badge">
                <input  type="checkbox" checked={tutor.available} />
                <span>Available</span>
              </div>
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