import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Files/Contact/Contact";
import Appointment from "./Components/Files/Appointment/Appointment";
import Tutors from './Components/Files/Tutor/Tutors';
import My_Appointment from './Components/Files/MyAppointment/My_Appointment';
import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
import Login from "./Components/Files/LoginPage/Login";
import MyProfile from "./Components/Files/Profile/MyProfile";
import Navbars from "./Components/Files/Navbar/Navbar";
import Footer from "./Components/Files/Footer/Footer";
import About from "./Components/Files/About/About";
import Home from "./Components/Files/Home";
import MyBookings from "./Components/Files/MyBookings/MyBookings";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppContext from './Components/Files/Context/AppContext';
import TutLogin from "./Components/Files/TutLogin/TutLogin";
import DoctorContextProvider from './Components/Files/Context/DoctorContext';

const App = () => {
  return (
    <AppContext>
      <DoctorContextProvider>
        <Router>
          <ToastContainer />
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Tutors" element={<Tutors />} />
            <Route path="/Tutors/:speciality" element={<Tutors />} />
            <Route path="/Appointment/:TutorId" element={<Appointment />} />
            <Route path="/MyAppointment" element={<My_Appointment />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/Relatedtutors" element={<Relatedtutor />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/tutor-sign" element={<TutLogin />} />
          </Routes>
          <Footer />
        </Router>
      </DoctorContextProvider>
    </AppContext>
  );
};

export default App;


