import React, { useState } from 'react';
import './myprofile.css';
const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'test@gmail.com',
    phone: '0000000000',
    address: {
      line1: 'AECS Layout',
      line2: 'Whitefield, BLR, KA'
    },
    gender: 'Male',
    birthday: '1993-01-01'
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile(profile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEditedProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setEditedProfile(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
      <div class="profile-header">
         <div class="profile-img-container">
            <div class="profile-img"></div>
            <h2>John Doe</h2>
          </div>
      </div>
        <div className="profile-section">
          <h3>CONTACT INFORMATION</h3>
          <div className="profile-details">
            {isEditing ? (
              <>
                <div className="profile-field">
                  <label>Email Id:</label>
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
                <div className="profile-field">
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address.line1"
                    value={editedProfile.address.line1}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="address.line2"
                    value={editedProfile.address.line2}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="profile-field">
                  <label>Email Id:</label>
                  <span>{profile.email}</span>
                </div>
                <div className="profile-field">
                  <label>Phone:</label>
                  <span>{profile.phone}</span>
                </div>
                <div className="profile-field">
                  <label>Address:</label>
                  <span>{profile.address.line1}</span>
                  <span>{profile.address.line2}</span>
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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="profile-field">
                  <label>Birthday:</label>
                  <input
                    type="date"
                    name="birthday"
                    value={editedProfile.birthday}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="profile-field">
                  <label>Gender:</label>
                  <span>{profile.gender}</span>
                </div>
                <div className="profile-field">
                  <label>Birthday:</label>
                  <span>{profile.birthday}</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={handleCancel} className="cancel-btn">Cancel</button>
            </>
          ) : (
            <button onClick={handleEdit} className="edit-btn">Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;