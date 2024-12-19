


import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { data } from '../Data.js'; // Static tutor data

// Create Context
export const AContext = createContext();

const AppContext = ({ children }) => {
  // State for user authentication and profile
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData')) || null
  );
  const [loading, setLoading] = useState(false);

  // Static tutor data from `data.js`
  const tutorsData = data;

  const currencySymbol = '$';
  const backendURL = 'http://localhost:4000';

  // Load user profile data from the API
  const loadUserProfileData = async () => {
    try {
      if (!token) {
        toast.error('Token not found.');
        return;
      }

      // Avoid redundant API calls if userData is already present
      if (userData) {
        console.log('User data already loaded, skipping API call.');
        return;
      }

      console.log('Fetching user data with token:', token);
      setLoading(true);

      const response = await axios.get(`${backendURL}/user/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        const fetchedUserData = response.data.userData;
        setUserData(fetchedUserData); // Update context state
        localStorage.setItem('userData', JSON.stringify(fetchedUserData)); // Cache user data
        console.log('User data fetched:', fetchedUserData);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('An error occurred while fetching user data.');
    } finally {
      setLoading(false);
    }
  };

  // Effect to automatically load user data if token is present
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(null); // Clear user data if token is missing
    }
  }, [token]);

  // Context value for consumers
  const value = {
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
    tutorsData, // Expose static tutors data
    loading,
    currencySymbol,
    backendURL,
  };

  return <AContext.Provider value={value}>{children}</AContext.Provider>;
};

export default AppContext;
