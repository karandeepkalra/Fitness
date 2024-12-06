import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopTutors from "./Components/Files/TopTutor/TopTutors";
import Appointment from "./Components/Files/Appointment/Appointment";
import Tutors from './Components/Files/Tutor/Tutors'
import My_Appointment from './Components/Files/MyAppointment/My_Appointment'
import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
import Login from "./Components/Files/LoginPage/Login";
import MyProfile from "./Components/files/Profile/MyProfile"
import Home from './pages/Home'
import Cards from './pages/Cards'
import About from './pages/About'
import Contact from './pages/Contact'
import MyBookings from './pages/MyBookings'
import Booking from './pages/Booking'
import Navbar from './components/Navbar'
import Filter from './pages/Filter'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Cards' element={<TopTutors />}/>
          <Route path='/SpecialityMenu/:speciality' element={<Filter />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/my-bookings' element={<MyBookings />}/>
          <Route path='/bookings/:bookid' element={<Booking/>}/>
        <Route path="/Tutors" element={<Tutors />} />
        <Route path="/Tutors/:speciality" element={<Tutors />}/>
        <Route path="/Appointment/:TutorId" element={<Appointment />} />
        <Route path="/MyAppointment" element={<My_Appointment />} />
        <Route path="/Relatedtutors" element={<Relatedtutor />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  );
};

export default App;




