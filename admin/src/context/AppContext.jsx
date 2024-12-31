// AppContext.jsx
import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backendUrl= import.meta.env.VITE_BACKEND_URL
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [appointments,setAppointments] = useState([])
  const [dashData, setDashData] = useState(false)

  const [profileData,setProfileData] = useState(false)

  const getAppointments = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/tutor/appointments`,
        {},
        {
          headers: { 
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error(error.response?.data?.message || "Error fetching appointments");
    }
  };
const getDashData = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/tutor/dashboard`,
        {}, // Empty body, tutId will be extracted from token
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Error fetching dashboard data");
    }
  };

const getProfileData = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/tutor/profile`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      if (data.success) {
        setProfileData(data.profileData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Error fetching profile');
    }
  };

  const value = {
    token,
    setToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments,
    dashData,
    setDashData,
    getDashData,
    profileData,
    setProfileData,
    getProfileData,
  };


  return <AppContext.Provider value={value}>
    {props.children}
    </AppContext.Provider>;
};

export default AppContextProvider;