// import React, { useState } from 'react';
// import './AddDoctor.css';
// import { assets } from '../../assets/assets';

// const AddDoctor = () => {
//   const [docImg, setDocImg] = useState(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [experience, setExperience] = useState('1 Year');
//   const [fees, setFees] = useState('');
//   const [about, setAbout] = useState('');
//   const [speciality, setSpeciality] = useState('General Physician');
//   const [degree, setDegree] = useState('');
//   const [address1, setAddress1] = useState('');
//   const [address2, setAddress2] = useState('');

//   return (
//     <form>
//       <p>Add Doctor</p>
//       <div>
//         <div>
//           <label htmlFor="doc-img">
//             <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
//           </label>
//           <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
//           <p>Upload doctor  <br />
//             picture</p>
//         </div>

//         <div>
//           <div>
//             <div>
//               <p>Doctor name</p>
//               <input type="text" placeholder="Name" required />
//             </div>

//             <div>
//               <p>Doctor Email</p>
//               <input type="email" placeholder="Email" required />
//             </div>

//             <div>
//               <p>Doctor password</p>
//               <input type="password" placeholder="Password" required />
//             </div>

//             <div>
//               <p>Experience</p>
//               <select value={experience} onChange={(e) => setExperience(e.target.value)} required>
//                 <option value="1 Year">1 Year</option>
//                 <option value="2 Year">2 Year</option>
//                 <option value="3 Year">3 Year</option>
//                 <option value="4 Year">4 Year</option>
//                 <option value="5 Year">5 Year</option>
//                 <option value="6 Year">6 Year</option>
//                 <option value="7 Year">7 Year</option>
//                 <option value="8 Year">8 Year</option>
//                 <option value="9 Year">9 Year</option>
//                 <option value="10 Year">10 Year</option>
//               </select>
//             </div>

//             <div>
//               <p>Fees</p>
//               <input type="number" placeholder="Fees" required />
//             </div>

//           </div>

//           <div>
//             <div>
//               <p>Speciality</p>
//               <select value={speciality} onChange={(e) => setSpeciality(e.target.value)} required>
//                 <option value="Sports Therapists">Sports Therapists</option>
//                 <option value="Geriatric Exercise">Geriatric Exercise</option>
//                 <option value="Aquatic Therapy">Aquatic Therapy</option>
//                 <option value="Neurological Rehabilitation">Neurological Rehabilitation</option>
//                 <option value="Clinical Exercise">Clinical Exercise</option>
//                 <option value="Rehabilitation">Rehabilitation</option>
//                 <option value="Pediatric Exercise">Pediatric Exercise</option>
//                 <option value="Occupational Therapy">Occupational Therapy</option>
//               </select>
//             </div>

//             <div>
//               <p>Education</p>
//               <input type="text" placeholder="Education" required />
//             </div>

//             <div>
//               <p>Address</p>
//               <input type="text" placeholder="Address 1" required />
//               <input type="text" placeholder="Address 2" required />
//             </div>

//           </div>
//         </div>

//         <div>
//           <p>About Doctor</p>
//           <textarea placeholder="Write about doctor" rows={5} required />
//         </div>

//         <button type="submit">Add doctor</button>
//       </div>
//     </form>
//   );
// };

// export default AddDoctor;



import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddDoctor.css";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "General Physician",
    degree: "",
    experience: "1 Year",
    fees: "",
    address1: "",
    address2: "",
    about: "",
    image: null,
  });

  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "image" && formData[key]) {
        submitData.append(key, formData[key]);
      } else {
        submitData.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${backendUrl}/api/tutor/register`, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success("Doctor registered successfully");
        setFormData({
          name: "",
          email: "",
          password: "",
          speciality: "General Physician",
          degree: "",
          experience: "1 Year",
          fees: "",
          address1: "",
          address2: "",
          about: "",
          image: null,
        });
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering doctor:", error);
      toast.error("An error occurred during registration");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-doctor-form">
      <p>Add Doctor</p>
      <div>
        <label>
          Profile Image
          <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
        </label>
        {formData.image && <img src={URL.createObjectURL(formData.image)} alt="Preview" />}
      </div>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
      <select name="speciality" value={formData.speciality} onChange={handleInputChange} required>
        <option value="General Physician">General Physician</option>
        {/* Add other options as needed */}
      </select>
      <input type="text" name="degree" placeholder="Degree" value={formData.degree} onChange={handleInputChange} required />
      <select name="experience" value={formData.experience} onChange={handleInputChange} required>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={`${i + 1} Year`}>
            {i + 1} Year
          </option>
        ))}
      </select>
      <input type="number" name="fees" placeholder="Fees" value={formData.fees} onChange={handleInputChange} required />
      <input type="text" name="address1" placeholder="Address 1" value={formData.address1} onChange={handleInputChange} required />
      <input type="text" name="address2" placeholder="Address 2" value={formData.address2} onChange={handleInputChange} />
      <textarea name="about" placeholder="About" value={formData.about} onChange={handleInputChange} required />
      <button type="submit">Add Doctor</button>
    </form>
  );
};

export default AddDoctor;
