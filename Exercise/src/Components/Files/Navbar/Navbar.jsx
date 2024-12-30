// import React, { useState } from 'react';
// import logo from "../../../assets/logo.jpg";

// import { NavLink, useNavigate } from 'react-router-dom';
// import './navbar.css';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [showMenu, setShowMenu] = useState(false);
//     const [token, setToken] = useState(true);
         
//     return ( 
//         <div className="navbar">
//             <img className="navbar-logo" src={logo} alt="logo"/> 
            
//             <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>

//             <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
//                 <NavLink to='/' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">HOME
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//                 <NavLink to='/Tutors' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">ALL TUTORS
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//                 <NavLink to='/about' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">ABOUT
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//                 <NavLink to='/contact' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">CONTACT
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//             </ul>
//             <div className="user-section">
//                 {token ? (
//                     <div className="profile-dropdown">
//                         <img className="profile-image" src={logo} alt='profile' />
//                         <div className="dropdown-menu">
//                             <div className="dropdown-content">
//                                 <p onClick={() => navigate('/MyProfile')}>My profile</p>
//                                 <p onClick={() => navigate('/my-bookings')}>My Booking</p>
//                                 <p onClick={() => navigate('/login')}>Login</p>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <button 
//                         onClick={() => navigate('/login')} 
//                         className="create-account-btn"
//                     >
//                         Create account
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import logo from "../../../assets/logo.jpg";
// import { NavLink, useNavigate } from 'react-router-dom';
// import './navbar.css';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [showMenu, setShowMenu] = useState(false);
//     const [token, setToken] = useState(null); // Token state to check if the user is logged in

//     useEffect(() => {
//         // Simulating token retrieval from localStorage or context
//         const savedToken = localStorage.getItem('token'); // Replace with your token logic
//         setToken(savedToken);
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('token'); // Clear token from storage
//         setToken(null); // Update token state
//         navigate('/login'); // Redirect to login page
//     };

//     return ( 
//         <div className="navbar">
//             <img className="navbar-logo" src={logo} alt="logo"/> 
            
//             <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>

//             <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
//                 <NavLink to='/' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">HOME
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//                 <NavLink to='/Tutors' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">ALL TUTORS
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//                 <NavLink to='/about' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">ABOUT
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//                 <NavLink to='/contact' onClick={() => setShowMenu(false)}> 
//                     <li className="nav-item">CONTACT
//                         <hr className="nav-underline"/>
//                     </li> 
//                 </NavLink>
//             </ul>

//             <div className="user-section">
//                 {token ? (
//                     <div className="profile-dropdown">
//                         <img className="profile-image" src={logo} alt='profile' />
//                         <div className="dropdown-menu">
//                             <div className="dropdown-content">
//                                 <p onClick={() => navigate('/MyProfile')}>My Profile</p>
//                                 <p onClick={() => navigate('/my-bookings')}>My Bookings</p>
//                                 <p onClick={handleLogout}>Logout</p>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <button 
//                         onClick={() => navigate('/login')} 
//                         className="create-account-btn"
//                     >
//                         Login / Create Account
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;





// import React, { useContext } from 'react';
// import logo from "../../../assets/logo.jpg";
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AContext } from '../Context/AppContext';
// import './navbar.css';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const { token, setToken } = useContext(AContext); // Get token from context
//     const [showMenu, setShowMenu] = React.useState(false);

//     const handleLogout = () => {
//         setToken(""); // Clear token on logout
//         navigate('/login');
//     };

//     return (
//         <div className="navbar">
//             <img className="navbar-logo" src={logo} alt="logo" />

//             <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>

//             <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
//                 <NavLink to='/' onClick={() => setShowMenu(false)}>
//                     <li className="nav-item">HOME
//                         <hr className="nav-underline" />
//                     </li>
//                 </NavLink>
//                 <NavLink to='/Tutors' onClick={() => setShowMenu(false)}>
//                     <li className="nav-item">ALL TUTORS
//                         <hr className="nav-underline" />
//                     </li>
//                 </NavLink>
//                 <NavLink to='/About' onClick={() => setShowMenu(false)}>
//                     <li className="nav-item">ABOUT
//                         <hr className="nav-underline" />
//                     </li>
//                 </NavLink>
//                 <NavLink to='/contact' onClick={() => setShowMenu(false)}>
//                     <li className="nav-item">CONTACT
//                         <hr className="nav-underline" />
//                     </li>
//                 </NavLink>
//             </ul>

//             <div className="user-section">
//                 {token ? (
//                     <div className="profile-dropdown">
//                         <img className="profile-image" src={logo} alt='profile' />
//                         <div className="dropdown-menu">
//                             <div className="dropdown-content">
//                                 <p onClick={() => navigate('/MyProfile')}>My profile</p>
//                                 <p onClick={() => navigate('/my-bookings')}>My Booking</p>
//                                 <p onClick={handleLogout}>Logout</p>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <button
//                         onClick={() => navigate('/login')}
//                         className="create-account-btn"
//                     >
//                         Login/Create Account
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;



import React, { useContext } from 'react';
import logo from "../../../assets/logo.jpg";
import { NavLink, useNavigate } from 'react-router-dom';
import { AContext } from '../Context/AppContext';
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AContext); // Get token from context
    const [showMenu, setShowMenu] = React.useState(false);

    const handleLogout = () => {
        setToken(''); // Clear token in context and localStorage
        navigate('/login');
    };

    return (
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt="logo" />

            <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                <NavLink to='/' onClick={() => setShowMenu(false)}>
                    <li className="nav-item">HOME
                        <hr className="nav-underline" />
                    </li>
                </NavLink>
                <NavLink to='/Tutors' onClick={() => setShowMenu(false)}>
                    <li className="nav-item">ALL TUTORS
                        <hr className="nav-underline" />
                    </li>
                </NavLink>
                <NavLink to='/About' onClick={() => setShowMenu(false)}>
                    <li className="nav-item">ABOUT
                        <hr className="nav-underline" />
                    </li>
                </NavLink>
                <NavLink to='/Contact' onClick={() => setShowMenu(false)}>
                    <li className="nav-item">CONTACT
                        <hr className="nav-underline" />
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
    );
};

export default Navbar;
