// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TopTutors from "./Components/Files/TopTutor/TopTutors";
// import Appointment from "./Components/Files/Appointment/Appointment";
// import Tutors from './Components/Files/Tutor/Tutors'
// import My_Appointment from './Components/Files/MyAppointment/My_Appointment'
// import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
// import Login from "./Components/Files/LoginPage/Login";
// import MyProfile from "./Components/Files/Profile/MyProfile"
// import Navbars from "./Components/Files/Navbar/Navbar"
// import Footer from "./Components/Files/Footer/Footer"
// import About from "./Components/Files/About/About"
// const App = () => {
//   return (
//     <Router>
//       <Navbars />
//       <Routes>
//       <Route path="/" element={<TopTutors />} />
//         <Route path="/Home" element={<TopTutors />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Tutors" element={<Tutors />} />
//         <Route path="/Tutors/:speciality" element={<Tutors />}/>
//         <Route path="/Appointment/:TutorId" element={<Appointment />} />
//         <Route path="/MyAppointment" element={<My_Appointment />} />
//         <Route path="/Relatedtutors" element={<Relatedtutor />} />
//         <Route path="/Login" element={<Login />}/>
//         <Route path="/MyProfile" element={<MyProfile />} />
        
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"; 
// import TopTutors from "./Components/Files/TopTutor/TopTutors";
// import Appointment from "./Components/Files/Appointment/Appointment";
// import Tutors from './Components/Files/Tutor/Tutors';
// import My_Appointment from './Components/Files/MyAppointment/My_Appointment';
// import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
// import Login from "./Components/Files/LoginPage/Login";
// import MyProfile from "./Components/Files/Profile/MyProfile";
// import Navbars from "./Components/Files/Navbar/Navbar";
// import Footer from "./Components/Files/Footer/Footer";
// import About from "./Components/Files/About/About";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbars />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
            
//             <Route path="/about" element={<About />} />
//             <Route path="/tutors" element={<Tutors />} />
//             <Route path="/tutors/:speciality" element={<Tutors />}/>
//             <Route path="/appointment/:TutorId" element={<Appointment />} />
//             <Route path="/my-appointment" element={<My_Appointment />} />
//             <Route path="/related-tutors" element={<Relatedtutor />} />
//             <Route path="/login" element={<Login />}/>
//             <Route path="/my-profile" element={<MyProfile />} />
//             <Route path="*" element={<div>Page not found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import TopTutors from "./Components/Files/TopTutor/TopTutors";
// import Appointment from "./Components/Files/Appointment/Appointment";
// import Tutors from './Components/Files/Tutor/Tutors';
// import My_Appointment from './Components/Files/MyAppointment/My_Appointment';
// import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
// import Login from "./Components/Files/LoginPage/Login";
// import MyProfile from "./Components/Files/Profile/MyProfile";
// import Navbars from "./Components/Files/Navbar/Navbar";
// import Footer from "./Components/Files/Footer/Footer";
// import About from "./pages/About";  
// import Contact from "./pages/Contact"; 

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbars />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
            
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
            
//             <Route path="/tutors" element={<Tutors />} />
//             <Route path="/tutors/:speciality" element={<Tutors />}/>
//             <Route path="/appointment/:TutorId" element={<Appointment />} />
//             <Route path="/my-appointment" element={<My_Appointment />} />
//             <Route path="/related-tutors" element={<Relatedtutor />} />
//             <Route path="/login" element={<Login />}/>
//             <Route path="/my-profile" element={<MyProfile />} />
            
//             <Route path="*" element={<div>Page not found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import TopTutors from "./Components/Files/TopTutor/TopTutors";
// import Appointment from "./Components/Files/Appointment/Appointment";
// import Tutors from './Components/Files/Tutor/Tutors';
// import My_Appointment from './Components/Files/MyAppointment/My_Appointment';
// import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
// import Login from "./Components/Files/LoginPage/Login";
// import MyProfile from "./Components/Files/Profile/MyProfile";
// import Navbars from "./Components/Files/Navbar/Navbar";
// import Footer from "./Components/Files/Footer/Footer";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Filter from "./pages/Filter";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbars />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/speciality/:speciality" element={<Filter />} />
//             <Route path="/tutors" element={<Tutors />} />
//             <Route path="/tutors/:speciality" element={<Tutors />}/>
//             <Route path="/appointment/:TutorId" element={<Appointment />} />
//             <Route path="/my-appointment" element={<My_Appointment />} />
//             <Route path="/related-tutors" element={<Relatedtutor />} />
//             <Route path="/login" element={<Login />}/>
//             <Route path="/my-profile" element={<MyProfile />} />
//             <Route path="*" element={<div>Page not found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



// latest frontend working code
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TopTutors from "./Components/Files/TopTutor/TopTutors";
// import Appointment from "./Components/Files/Appointment/Appointment";
// import Tutors from './Components/Files/Tutor/Tutors'
// import My_Appointment from './Components/Files/MyAppointment/My_Appointment'
// import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
// import Login from "./Components/Files/LoginPage/Login";
// import MyProfile from "./Components/Files/Profile/MyProfile"
// import Navbars from "./Components/Files/Navbar/Navbar"
// import Footer from "./Components/Files/Footer/Footer"
// import About from "./Components/Files/About/About"
// import { ToastContainer,toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css' ;
// // import { AppContextProvider } from "./Components/Files/Context/AppContext";
// // import { AppContextProvider } from './Context/AppContext'; 
// const App = () => {
//   return (
//     // <AppContextProvider>
//     <Router>
//       <ToastContainer/>
//       <Navbars />
//       <Routes>
//       <Route path="/" element={<TopTutors />} />
//         <Route path="/Home" element={<TopTutors />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Tutors" element={<Tutors />} />
//         <Route path="/Tutors/:speciality" element={<Tutors />}/>
//         <Route path="/Appointment/:TutorId" element={<Appointment />} />
//         <Route path="/MyAppointment" element={<My_Appointment />} />
//         <Route path="/Relatedtutors" element={<Relatedtutor />} />
//         <Route path="/Login" element={<Login />}/>
//         <Route path="/MyProfile" element={<MyProfile />} />
        
//       </Routes>
//       <Footer />
//     </Router>
//     // </AppContextProvider>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopTutors from "./Components/Files/TopTutor/TopTutors";
import Appointment from "./Components/Files/Appointment/Appointment";
import Tutors from './Components/Files/Tutor/Tutors';
import My_Appointment from './Components/Files/MyAppointment/My_Appointment';
import Relatedtutor from "./Components/Files/RelatedTutors/Relatedtutors";
import Login from "./Components/Files/LoginPage/Login";
import MyProfile from "./Components/Files/Profile/MyProfile";
import Navbars from "./Components/Files/Navbar/Navbar";
import Footer from "./Components/Files/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppContext from './Components/Files/Context/AppContext'; // Import the context provider
 

const App = () => {
  return (
    <AppContext>
      <Router>
        <ToastContainer />
        <Navbars />
        <Routes>
          <Route path="/" element={<TopTutors />} />
          <Route path="/Home" element={<TopTutors />} />
          <Route path="/About" element={<About />} />
           <Route path= "/Contact"  element={<Contact/>} />
         
          <Route path="/Tutors" element={<Tutors />} />
          <Route path="/Tutors/:speciality" element={<Tutors />} />
          <Route path="/Appointment/:TutorId" element={<Appointment />} />
          <Route path="/MyAppointment" element={<My_Appointment />} />
          <Route path="/Relatedtutors" element={<Relatedtutor />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext>
  );
};

export default App;




