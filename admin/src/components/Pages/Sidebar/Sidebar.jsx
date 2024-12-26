import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../../../assets/assets';
import './Sidebar.css';  // Add this import

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <NavLink to="/admin-dashboard" activeClassName="active">
                    <img src={assets.home_icon} alt="Dashboard"/>
                    <p>Dashboard</p>
                </NavLink>
                <NavLink to="/AllAPpointments" activeClassName="active">
                    <img src={assets.appointment_icon} alt="Appointments"/>
                    <p>Appointments</p>
                </NavLink>
                <NavLink to="/AddDoctor" activeClassName="active">
                    <img src={assets.add_icon} alt="Add Doctor"/>
                    <p>Add Doctor</p>
                </NavLink>
                <NavLink to="/DoctorList" activeClassName="active">
                    <img src={assets.people_icon} alt="Doctors List"/>
                    <p>Doctors List</p>
                </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;