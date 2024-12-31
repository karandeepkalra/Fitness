// import React, { useState } from 'react';

// const DoctorRegistrationForm = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     specialization: '',
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle the form data here (e.g., send to backend)
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="form-container">
//       <h2>Doctor Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="specialization">Specialization</label>
//           <input
//             type="text"
//             id="specialization"
//             name="specialization"
//             placeholder="Enter your specialization"
//             value={formData.specialization}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="submit-btn">Register</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorRegistrationForm;



import React, { useState } from 'react';

const DoctorRegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('http://localhost:4000/doctor/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register doctor');
      }

      const data = await response.json();
      console.log('Doctor registered:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Doctor Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            placeholder="Enter your specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default DoctorRegistrationForm;
