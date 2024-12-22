import React, { useContext } from 'react';
import { assets } from "../../../assets/assets";  // Adjust this path
import { AdminContext } from '../context/AdminContext';
import {useNavigate} from 'react-router-dom'
import './Navbar.css'
// import sidebar from '../Sidebar/Sidebar'
const Navbar = () => {
    const { aToken,setToken } = useContext(AdminContext);
    const navigate=useNavigate()

    const logout=()=>{
        navigate('/')
        aToken &&setToken('')
        aToken && localStorage.removeItem('aToken')

    }
    return (
        <div>
            <div className="cont">
                <div className="top">
                <img src={assets.admin_logo} alt="Admin Logo"/>
                <p>{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button className='Btn1' onClick={logout}>Logout</button>
            </div>
            
        </div>
       
    );
};

export default Navbar;