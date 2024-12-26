import React, { useContext } from 'react';
import { assets } from "../../assets/assets"; 
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    setToken(false); // Clear the token in context
    localStorage.removeItem('token'); // Clear the token in localStorage
  };

  return (
    <div>
      <div className="cont">
        <div className="top">
          <img src={assets.admin_logo} alt="Admin Logo" />
          <p>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        <button className='Btn1' onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
