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
          <NavLink to="/admin-dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={assets.home_icon} alt="Dashboard" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink to="/all-appointments" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={assets.appointment_icon} alt="Appointments" />
            <p>Appointments</p>
          </NavLink>
          <NavLink to="/add-doctor" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={assets.add_icon} alt="Add Doctor" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink to="/doctor-list" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={assets.people_icon} alt="Doctors List" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
