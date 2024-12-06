import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopTutors from "./Components/Files/TopTutor/TopTutors";
import Appointment from "./Components/Files/Appointment/Appointment";
import Tutors from './Components/Files/Tutor/Tutors'
import My_Appointment from './Components/Files/MyAppointment/My_Appointment'
import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
import Login from "./Components/Files/LoginPage/Login";
import MyProfile from "./Components/files/Profile/MyProfile"
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<TopTutors />} />
        <Route path="/Home" element={<TopTutors />} />
        <Route path="/Tutors" element={<Tutors />} />
        <Route path="/Tutors/:speciality" element={<Tutors />}/>
        <Route path="/Appointment/:TutorId" element={<Appointment />} />
        <Route path="/MyAppointment" element={<My_Appointment />} />
        <Route path="/Relatedtutors" element={<Relatedtutor />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/MyProfile" element={<MyProfile />} />
        
      </Routes>
    </Router>
  );
};

export default App;
