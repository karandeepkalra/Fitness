import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopTutors from "./Components/Files/TopTutor/TopTutors";
import Appointment from "./Components/Files/Appointment/Appointment";
import Tutors from './Components/Files/Tutor/Tutors'
import My_Appointment from './Components/Files/MyAppointment/My_Appointment'
import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
import Login from "./Components/Files/LoginPage/Login";
import MyProfile from "./Components/Files/Profile/MyProfile"
import Navbars from "./Components/Files/Navbar/Navbar"
import Footer from "./Components/Files/Footer/Footer"
import About from "./Components/Files/About/About"
// import { AppContextProvider } from "./Components/Files/Context/AppContext";
// import { AppContextProvider } from './Context/AppContext'; 
const App = () => {
  return (
    // <AppContextProvider>
    <Router>
      <Navbars />
      <Routes>
      <Route path="/" element={<TopTutors />} />
        <Route path="/Home" element={<TopTutors />} />
        <Route path="/About" element={<About />} />
        <Route path="/Tutors" element={<Tutors />} />
        <Route path="/Tutors/:speciality" element={<Tutors />}/>
        <Route path="/Appointment/:TutorId" element={<Appointment />} />
        <Route path="/MyAppointment" element={<My_Appointment />} />
        <Route path="/Relatedtutors" element={<Relatedtutor />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/MyProfile" element={<MyProfile />} />
        
      </Routes>
      <Footer />
    </Router>
    // </AppContextProvider>
  );
};

export default App;
