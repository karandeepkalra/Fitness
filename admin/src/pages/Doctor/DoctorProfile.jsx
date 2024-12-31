// current working code
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const { token, profileData, setProfileData, getProfileData, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      };

      const { data } = await axios.post(
        `${backendUrl}/api/tutor/update-profile`,
        { ...updateData, tutId: profileData._id }, // Include tutId in request
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Error updating profile');
    }
  };

  useEffect(() => {
    if (token) {
      getProfileData();
    }
  }, [token]);

  if (!profileData) return null;

  return (
    // Rest of your JSX remains the same as in the previous version
    <div className="doctor-profile-container">
      <div className="profile-card">
        <div className="profile-content">
          <div className="profile-image-section">
            <img 
              src={profileData.image} 
              alt={profileData.name}
              className="profile-image"
            />
          </div>

          <div className="profile-details-section">
            <h2 className="doctor-name">{profileData.name}</h2>
            
            <div className="qualification-section">
              <span className="qualification">
                {profileData.degree} - {profileData.speciality}
              </span>
              <span className="experience-badge">
                {profileData.experience} Years
              </span>
            </div>

            <div className="about-section">
              <h3>About:</h3>
              <p className="about-text">
                {profileData.about}
              </p>
            </div>

            <div className="fees-section">
              <p>
                Appointment fee: {' '}
                {isEdit ? (
                  <input
                    type="number"
                    className="fee-input"
                    onChange={(e) => setProfileData(prev => ({...prev, fees: e.target.value}))}
                    value={profileData.fees}
                  />
                ) : (
                  <span className="fee-amount">${profileData.fees}</span>
                )}
              </p>
            </div>

            <div className="address-section">
              <h3>Address:</h3>
              <div className="address-content">
                {isEdit ? (
                  <div className="address-inputs">
                    <input
                      type="text"
                      className="address-input"
                      onChange={(e) => setProfileData(prev => ({
                        ...prev,
                        address: {...prev.address, line1: e.target.value}
                      }))}
                      value={profileData.address.line1}
                    />
                    <input
                      type="text"
                      className="address-input"
                      onChange={(e) => setProfileData(prev => ({
                        ...prev,
                        address: {...prev.address, line2: e.target.value}
                      }))}
                      value={profileData.address.line2}
                    />
                  </div>
                ) : (
                  <p className="address-text">
                    {profileData.address.line1}<br/>
                    {profileData.address.line2}
                  </p>
                )}
              </div>
            </div>

            <div className="availability-section">
              <input
                type="checkbox"
                checked={profileData.available}
                onChange={(e) => setProfileData(prev => ({...prev, available: e.target.checked}))}
                disabled={!isEdit}
                className="availability-checkbox"
              />
              <span>Available</span>
            </div>

            <div className="action-section">
              {isEdit ? (
                <button
                  onClick={updateProfile}
                  className="save-button"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="edit-button"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;


// import React, { useContext, useState, useEffect, useRef } from 'react';
// import { AppContext } from '../../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import './DoctorProfile.css';

// const DoctorProfile = () => {
//   const { token, profileData, setProfileData, getProfileData, backendUrl } = useContext(AppContext);
//   const [isEdit, setIsEdit] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('image', file);
//     formData.append('tutId', profileData._id);

//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/tutor/update-profile-image`,
//         formData,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );

//       if (data.success) {
//         setProfileData(prev => ({
//           ...prev,
//           image: data.imageUrl
//         }));
//         toast.success('Profile image updated successfully');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Failed to update profile image');
//     }
//   };

//   const updateProfile = async () => {
//     try {
//       const updateData = {
//         name: profileData.name,
//         address: profileData.address,
//         fees: profileData.fees,
//         available: profileData.available,
//         tutId: profileData._id
//       };

//       const { data } = await axios.post(
//         `${backendUrl}/api/tutor/update-profile`,
//         updateData,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         setIsEdit(false);
//         getProfileData();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || 'Error updating profile');
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       getProfileData();
//     }
//   }, [token]);

//   if (!profileData) return null;

//   return (
//     <div className="doctor-profile-container">
//       <div className="profile-wrapper">
//         <div className="sidebar">
//           <div className="menu-item active">
//             <span>Profile</span>
//           </div>
//         </div>
        
//         <div className="profile-content">
//           <div className="profile-card">
//             <div className="profile-header">
//               <div className="profile-image-container">
//                 <img 
//                   src={profileData.image} 
//                   alt={profileData.name}
//                   className="profile-image"
//                 />
//                 {isEdit && (
//                   <div className="image-overlay" onClick={() => fileInputRef.current?.click()}>
//                     <span>Change Photo</span>
//                   </div>
//                 )}
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleImageChange}
//                   accept="image/*"
//                   style={{ display: 'none' }}
//                 />
//               </div>

//               <div className="profile-info">
//                 {isEdit ? (
//                   <input
//                     type="text"
//                     className="name-input"
//                     value={profileData.name}
//                     onChange={(e) => setProfileData(prev => ({...prev, name: e.target.value}))}
//                   />
//                 ) : (
//                   <h1 className="doctor-name">{profileData.name}</h1>
//                 )}
                
//                 <div className="qualification-section">
//                   <span className="qualification">
//                     {profileData.degree} - {profileData.speciality}
//                   </span>
//                   <span className="experience-badge">
//                     {profileData.experience} Years
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="profile-details">
//               <div className="about-section">
//                 <h3>About:</h3>
//                 <p className="about-text">
//                   {profileData.about}
//                 </p>
//               </div>

//               <div className="fees-section">
//                 <h3>Appointment fee:</h3>
//                 {isEdit ? (
//                   <input
//                     type="number"
//                     className="fee-input"
//                     onChange={(e) => setProfileData(prev => ({...prev, fees: e.target.value}))}
//                     value={profileData.fees}
//                   />
//                 ) : (
//                   <span className="fee-amount">${profileData.fees}</span>
//                 )}
//               </div>

//               <div className="address-section">
//                 <h3>Address:</h3>
//                 {isEdit ? (
//                   <div className="address-inputs">
//                     <input
//                       type="text"
//                       className="address-input"
//                       onChange={(e) => setProfileData(prev => ({
//                         ...prev,
//                         address: {...prev.address, line1: e.target.value}
//                       }))}
//                       value={profileData.address.line1}
//                     />
//                     <input
//                       type="text"
//                       className="address-input"
//                       onChange={(e) => setProfileData(prev => ({
//                         ...prev,
//                         address: {...prev.address, line2: e.target.value}
//                       }))}
//                       value={profileData.address.line2}
//                     />
//                   </div>
//                 ) : (
//                   <div className="address-text">
//                     <p>{profileData.address.line1}</p>
//                     <p>{profileData.address.line2}</p>
//                   </div>
//                 )}
//               </div>

//               <div className="availability-section">
//                 <label className="availability-label">
//                   <input
//                     type="checkbox"
//                     checked={profileData.available}
//                     onChange={(e) => setProfileData(prev => ({...prev, available: e.target.checked}))}
//                     disabled={!isEdit}
//                     className="availability-checkbox"
//                   />
//                   <span>Available</span>
//                 </label>
//               </div>

//               <div className="action-section">
//                 {isEdit ? (
//                   <button onClick={updateProfile} className="save-button">
//                     Save
//                   </button>
//                 ) : (
//                   <button onClick={() => setIsEdit(true)} className="edit-button">
//                     Edit
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorProfile;