
// App.jsx
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './pages/Navbar/Navbar';
import Sidebar from './pages/Sidebar/Sidebar';
import Dashboard from './pages/Doctor/Dashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import Login from './pages/login/login';
import { AppContext } from './context/AppContext';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { token } = useContext(AppContext);

  if (!token) {
    return (
      <>
        <Login />
        <ToastContainer />
      </>
    );
  }

  return (
    <div>
      <ToastContainer />
      <ToastContainer />
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/doctor-dashboard" element={<Dashboard />} />
            <Route path="/doctor-appointments" element={<DoctorAppointments />} />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;