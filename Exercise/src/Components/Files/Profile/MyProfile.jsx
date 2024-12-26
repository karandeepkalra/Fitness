// import React, { useContext, useState, useEffect } from 'react';
// import { AContext } from '../Context/AppContext';
// import './myprofile.css';

// const MyProfile = () => {
//   const { userData, setUserData } = useContext(AContext); // Using userData from context
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({
//     email: '',
//     phone: '',
//     gender: '',
//     birthday: '',
//     name: '..',
//   });

//   useEffect(() => {
//     if (userData) {
//       setEditedProfile({
//         email: userData.email || '',
//         phone: userData.phone || '',
//         gender: userData.gender || '',
//         birthday: userData.dob || '',
//         name: userData.name || '',
//       });
//     }
//   }, [userData]); 

//   const handleEdit = () => {
//     setIsEditing(true);
//     setEditedProfile({
//       ...userData, 
//     });
//   };

//   const handleSave = () => {
//     setUserData(editedProfile); 
//     localStorage.setItem('userData', JSON.stringify(editedProfile)); 
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedProfile({
//       ...userData, 
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return userData ? (
//     <div className="profile-container">
//       <div className="profile-content">
//         <h2>
//           {isEditing ? (
//             <input
//               type="text"
//               name="name"
//               value={editedProfile.name}
//               onChange={handleChange}
//             />
//           ) : (
//             editedProfile.name
//           )}
//         </h2>
//         <div className="profile-section">
//           <h3>CONTACT INFORMATION</h3>
//           <div className="profile-details">
//             {isEditing ? (
//               <>
//                 <div className="profile-field">
//                   <label>Email Id:</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={editedProfile.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="profile-field">
//                   <label>Phone:</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={editedProfile.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="profile-field">
//                   <label>Email Id:</label>
//                   <span>{editedProfile.email || 'N/A'}</span>
//                 </div>
//                 <div className="profile-field">
//                   <label>Phone:</label>
//                   <span>{editedProfile.phone || 'N/A'}</span>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         <div className="profile-section">
//           <h3>BASIC INFORMATION</h3>
//           <div className="profile-details">
//             {isEditing ? (
//               <>
//                 <div className="profile-field">
//                   <label>Gender:</label>
//                   <select
//                     name="gender"
//                     value={editedProfile.gender}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 <div className="profile-field">
//                   <label>Birthday:</label>
//                   <input
//                     type="date"
//                     name="birthday"
//                     value={editedProfile.birthday}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="profile-field">
//                   <label>Gender:</label>
//                   <span>{editedProfile.gender || 'N/A'}</span>
//                 </div>
//                 <div className="profile-field">
//                   <label>Birthday:</label>
//                   <span>{editedProfile.birthday || 'N/A'}</span>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         <div className="profile-actions">
//           {isEditing ? (
//             <>
//               <button onClick={handleSave} className="save-btn">
//                 Save
//               </button>
//               <button onClick={handleCancel} className="cancel-btn">
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button onClick={handleEdit} className="edit-btn">
//               Edit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div>Loading...</div>
//   );
// };

// export default MyProfile;

import React, { useContext, useState, useEffect } from 'react';
import { AContext } from '../Context/AppContext';
import './myprofile.css';

const MyProfile = () => {
  const { userData, setUserData } = useContext(AContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    email: '',
    phone: '',
    gender: '',
    dob: '',
    name: '',
  });

  useEffect(() => {
    if (userData) {
      const formattedDob = userData.dob ? userData.dob.split('T')[0] : '';
      setEditedProfile({
        email: userData.email || '',
        phone: userData.phone || '',
        gender: userData.gender || '',
        dob: formattedDob,
        name: userData.name || '',
      });
    }
  }, [userData]);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    const updatedProfile = { ...editedProfile };
    setUserData(updatedProfile);
    localStorage.setItem('userData', JSON.stringify(updatedProfile));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (userData) {
      const formattedDob = userData.dob ? userData.dob.split('T')[0] : '';
      setEditedProfile({
        email: userData.email || '',
        phone: userData.phone || '',
        gender: userData.gender || '',
        dob: formattedDob,
        name: userData.name || '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  return userData ? (
    <div className="profile-container">
      <div className="profile-content">
        <h2>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedProfile.name}
              onChange={handleChange}
            />
          ) : (
            editedProfile.name
          )}
        </h2>
        <div className="profile-section">
          <h3>CONTACT INFORMATION</h3>
          <div className="profile-details">
            {isEditing ? (
              <>
                <div className="profile-field">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-field">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={editedProfile.phone}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="profile-field">
                  <label>Email:</label>
                  <span>{editedProfile.email || 'N/A'}</span>
                </div>
                <div className="profile-field">
                  <label>Phone:</label>
                  <span>{editedProfile.phone || 'N/A'}</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="profile-section">
          <h3>BASIC INFORMATION</h3>
          <div className="profile-details">
            {isEditing ? (
              <>
                <div className="profile-field">
                  <label>Gender:</label>
                  <select
                    name="gender"
                    value={editedProfile.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="profile-field">
                  <label>Birthday:</label>
                  <input
                    type="date"
                    name="dob"
                    value={editedProfile.dob}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="profile-field">
                  <label>Gender:</label>
                  <span>{editedProfile.gender || 'N/A'}</span>
                </div>
                <div className="profile-field">
                  <label>Birthday:</label>
                  <span>{editedProfile.dob || 'N/A'}</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-btn">
                Save
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEdit} className="edit-btn">
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MyProfile;