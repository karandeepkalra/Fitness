import React, { useContext, useState } from 'react';
import logo from "../../../assets/logoooo.jpg";
import { NavLink, useNavigate } from 'react-router-dom';
import { AContext } from '../Context/AppContext';
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AContext);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        setToken('');
        setShowDropdown(false);
        navigate('/login');
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <>
            <div className="navbar">
                <img className="navbar-logo" src={logo} alt="logo" />

                <div 
                    className="hamburger" 
                    onClick={() => setShowMenu(!showMenu)}
                    aria-label="Toggle menu"
                    role="button"
                    tabIndex={0}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                    <NavLink to='/' onClick={closeMenu}>
                        <li className="nav-item">HOME</li>
                    </NavLink>
                    <NavLink to='/Tutors' onClick={closeMenu}>
                        <li className="nav-item">ALL TUTORS</li>
                    </NavLink>
                    <NavLink to='/About' onClick={closeMenu}>
                        <li className="nav-item">ABOUT</li>
                    </NavLink>
                    <NavLink to='/Contact' onClick={closeMenu}>
                        <li className="nav-item">CONTACT</li>
                    </NavLink>
                </ul>

                <div className="user-section">
                    {token ? (
                        <div 
                            className="profile-dropdown"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <img className="profile-image" src={logo} alt='profile' />
                            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                                <div className="dropdown-content">
                                    <p onClick={() => {
                                        navigate('/MyProfile');
                                        setShowDropdown(false);
                                    }}>My profile</p>
                                    <p onClick={() => {
                                        navigate('/my-bookings');
                                        setShowDropdown(false);
                                    }}>My Booking</p>
                                    <p onClick={handleLogout}>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="create-account-btn"
                        >
                            Login/Create Account
                        </button>
                    )}
                </div>
            </div>
            {showMenu && <div className="mobile-backdrop" onClick={closeMenu} />}
        </>
    );
};

export default Navbar;



