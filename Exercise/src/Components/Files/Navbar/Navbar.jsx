import React, { useState } from 'react';
import logo from "../../Images/Tutor1.jpg";
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
         
    return ( 
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt="logo"/> 
            
            <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                <NavLink to='/' onClick={() => setShowMenu(false)}> 
                    <li className="nav-item">HOME
                        <hr className="nav-underline"/>
                    </li> 
                </NavLink>
                <NavLink to='/Tutors' onClick={() => setShowMenu(false)}> 
                    <li className="nav-item">ALL TUTORS
                        <hr className="nav-underline"/>
                    </li> 
                </NavLink>
                <NavLink to='/about' onClick={() => setShowMenu(false)}> 
                    <li className="nav-item">ABOUT
                        <hr className="nav-underline"/>
                    </li> 
                </NavLink>
                <NavLink to='/contact' onClick={() => setShowMenu(false)}> 
                    <li className="nav-item">CONTACT
                        <hr className="nav-underline"/>
                    </li> 
                </NavLink>
            </ul>
            <div className="user-section">
                {token ? (
                    <div className="profile-dropdown">
                        <img className="profile-image" src={logo} alt='profile' />
                        <div className="dropdown-menu">
                            <div className="dropdown-content">
                                <p onClick={() => navigate('/MyProfile')}>My profile</p>
                                <p onClick={() => navigate('/my-bookings')}>My Booking</p>
                                <p onClick={() => navigate('/login')}>Login</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button 
                        onClick={() => navigate('/login')} 
                        className="create-account-btn"
                    >
                        Create account
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;