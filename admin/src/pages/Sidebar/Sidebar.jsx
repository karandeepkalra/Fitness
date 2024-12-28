import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Sidebar.css';
import { AppContext } from '../../context/AppContext';
const Sidebar = () => {
   const { token } = useContext(AppContext);
 
  return (
    <div className="sidebar">
      {token && (
        <ul>
          <NavLink to="/doctor-dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={assets.home_icon} alt="Dashboard" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink to="/doctor-appointments" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={assets.appointment_icon} alt="Appointments" />
            <p>Appointments</p>
          </NavLink>
          <NavLink to="/doctor-list" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={assets.people_icon} alt="Doctors List" />
            <p>Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
