
import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setToken } = useContext(AppContext);
  const [formState, setFormState] = useState("login");
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    speciality: "General Physician",
    experience: "1 Year",
    fees: "",
    degree: "",
    address1: "",
    address2: "",
    about: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    if (formState === "register") {
      const requiredFields = [
        "name",
        "email",
        "password",
        "speciality",
        "experience",
        "fees",
        "degree",
        "address1",
        "about",
      ];

      for (let field of requiredFields) {
        if (!formData[field] || formData[field].trim() === "") {
          toast.error(`Please fill in the ${field}`);
          return false;
        }
      }

      if (!formData.image) {
        toast.error("Please upload a profile image");
        return false;
      }
    } else {
      if (!formData.email || !formData.password) {
        toast.error("Email and password are required");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      let response;
      if (formState === "login") {
        response = await axios.post(`${backendUrl}/api/tutor/login`, {
          email: formData.email,
          password: formData.password,
        });
      } else {
        const submitData = new FormData();
        Object.keys(formData).forEach((key) => {
          if (key === "image" && formData[key]) {
            submitData.append(key, formData[key]);
          } else if (key === "address1" || key === "address2") {
            // Combine address fields into a single object
            const address = {
              line1: formData.address1,
              line2: formData.address2 || "",
            };
            if (key === "address1") {
              submitData.append("address", JSON.stringify(address));
            }
          } else if (key !== "image") {
            submitData.append(key, formData[key]);
          }
        });

        response = await axios.post(`${backendUrl}/api/tutor/register`, submitData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      const { data } = response;
      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success(`${formState === "login" ? "Login" : "Registration"} successful`);
        navigate("/");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || `Error during ${formState}. Please try again.`;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="head">
      <div className="main">
        <h2>{formState === "login" ? "Login" : "Add Doctor"}</h2>
        
        {formState === "login" ? (
          <form onSubmit={handleSubmit}>
            <div>
              <p>Doctor Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <p>Doctor Password</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="left-section">
                <div>
                  <p>Upload doctor picture</p>
                  <div 
                    className="upload-picture"
                    onClick={() => document.querySelector('input[type="file"]').click()}
                  >
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                      />
                    ) : (
                      <span>Click to upload</span>
                    )}
                  </div>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                    required
                  />
                </div>
                <div>
                  <p>Doctor name</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <p>Doctor Email</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <p>Doctor Password</p>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <p>Experience</p>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="4 Years">4 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>
              
              <div className="right-section">
                <div>
                  <p>Speciality</p>
                  <select
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Clinical Exercise">Clinical Exercise</option>
                    <option value="Rehabilitation">Rehabilitation</option>
                    <option value="Sports Therapist">Sports Therapist</option>
                    <option value="Neurological Rehabilitation">Neurological Rehabilitation</option>
                    <option value="Geriatic Exercise">Geriatic Exercise</option>
                    <option value="Aquatic Therapy">Aquatic Therapy</option>
                    <option value="Occupational Therapy">Occupational Therapy</option>
                    <option value="Pediatrician">Pediatrician</option>
                    
                  </select>
                </div>
                <div>
                  <p>Education</p>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <p>Address</p>
                  <input
                    type="text"
                    name="address1"
                    placeholder="address 1"
                    value={formData.address1}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="address2"
                    placeholder="address 2"
                    value={formData.address2}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <p>Fees</p>
                  <input
                    type="number"
                    name="fees"
                    value={formData.fees}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <p>About Doctor</p>
                  <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit">Register</button>
          </form>
        )}
        <p className="switch-form">
          {formState === "login" ? (
            <span onClick={() => setFormState("register")}>Create an account</span>
          ) : (
            <span onClick={() => setFormState("login")}>Already have an account? Login</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;