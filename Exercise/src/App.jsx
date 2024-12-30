import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Files/Contact/Contact"
import Appointment from "./Components/Files/Appointment/Appointment";
import Tutors from './Components/Files/Tutor/Tutors'
import My_Appointment from './Components/Files/MyAppointment/My_Appointment'
import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
import Login from "./Components/Files/LoginPage/Login";
import MyProfile from "./Components/Files/Profile/MyProfile"
import Navbars from "./Components/Files/Navbar/Navbar"
import Footer from "./Components/Files/Footer/Footer"
import About from "./Components/Files/About/About"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import Banner from "./Components/Files/Banner/Banner"
import Home from "./Components/Files/Home";
import MyBookings from "./Components/Files/MyBookings/MyBookings"
// import DoctorRegistrationForm from './components/DoctorRegistrationForm.jsx';

// import { AppContextProvider } from "./Components/Files/Context/AppContext";
// import { AppContextProvider } from './Context/AppContext'; 
const App = () => {
  return (
    // <AppContextProvider>
    <Router>
      <ToastContainer />
      <Navbars />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Tutors" element={<Tutors />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Tutors/:speciality" element={<Tutors />}/>
        <Route path="/Appointment/:TutorId" element={<Appointment />} />
        <Route path="/MyAppointment" element={<My_Appointment />} />
        <Route path="/Relatedtutors" element={<Relatedtutor />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/my-bookings" element={<MyBookings />} /> 
        {/* <Route path="/register-doctor" element={<DoctorRegistrationForm />} />       */}
      </Routes>
      <Footer />
    </Router>
    // </AppContextProvider>
  );
};

export default App;
