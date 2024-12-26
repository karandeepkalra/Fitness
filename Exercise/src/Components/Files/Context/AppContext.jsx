// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { data } from '../Data.js'; 

// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userData, setUserData] = useState(
//     JSON.parse(localStorage.getItem('userData')) || null
//   );
//   const [loading, setLoading] = useState(false);

//   const tutorsData = data;

//   const currencySymbol = '$';
//   const backendURL = 'http://localhost:4000';

//   const loadUserProfileData = async () => {
//     try {
//       if (!token) {
//         toast.error('Token not found.');
//         return;
//       }

//       if (userData) {
//         console.log('User data already loaded, skipping API call.');
//         return;
//       }

//       console.log('Fetching user data with token:', token);
//       setLoading(true);

//       const response = await axios.get(`${backendURL}/user/get-profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.data.success) {
//         const fetchedUserData = response.data.userData;
//         setUserData(fetchedUserData);
//         localStorage.setItem('userData', JSON.stringify(fetchedUserData)); 
//         console.log('User data fetched:', fetchedUserData);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       toast.error('An error occurred while fetching user data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     } else {
//       setUserData(null); 
//     }
//   }, [token]);

//   const value = {
//     token,
//     setToken,
//     userData,
//     setUserData,
//     loadUserProfileData,
//     tutorsData, 
//     loading,
//     currencySymbol,
//     backendURL,
//   };

//   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// };

// export default AppContext;


import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { data } from '../Data.js'; // Static tutor data

// Create Context
export const AContext = createContext();

const AppContext = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData')) || null
  );
  const [loading, setLoading] = useState(false);

  // Static tutor data from `data.js`
  const tutorsData = data; // Keep this to provide tutor data

  const currencySymbol = '$';
  const backendURL = 'http://localhost:4000';

  // Fetch user profile from backend
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token

      if (!token) {
        console.error('No token found. User may not be logged in.');
        return;
      }

      setLoading(true);
      const res = await fetch(`${backendURL}/user/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token
        },
      });

      if (res.ok) {
        const data = await res.json();

        if (data.userData) {
          setUserData(data.userData); // Update userData state
          localStorage.setItem('userData', JSON.stringify(data.userData)); // Cache data
        } else {
          console.error('Invalid userData received:', data);
        }
      } else {
        const errorData = await res.json();
        console.error('Failed to fetch profile:', errorData.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user profile when token exists
  useEffect(() => {
    if (token) {
      fetchData(); // Fetch profile data when token exists
    }
  }, [token]);

  // Context value for consumers
  const value = {
    token,
    setToken,
    userData,
    setUserData,
    tutorsData, // Provide tutors data here
    loading,
    currencySymbol,
    backendURL,
  };

  return <AContext.Provider value={value}>{children}</AContext.Provider>;
};

export default AppContext;
