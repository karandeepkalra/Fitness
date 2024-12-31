import React, { useState } from 'react';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    qualifications: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/tutor/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Doctor registered successfully!');
        setFormData({
          name: '',
          email: '',
          password: '',
          specialization: '',
          qualifications: '',
          contactInfo: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Doctor Registration</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      <input
        type="text"
        name="specialization"
        placeholder="Specialization"
        value={formData.specialization}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      <input
        type="text"
        name="qualifications"
        placeholder="Qualifications"
        value={formData.qualifications}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      <input
        type="text"
        name="contactInfo"
        placeholder="Contact Info"
        value={formData.contactInfo}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
      />
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Register
      </button>
    </form>
  );
};

export default DoctorRegistration;