// // current working 
// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { data } from '../Data.js'; // Static tutor data
// import axios from 'axios'


// // Create Context
// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userData, setUserData] = useState(
//     JSON.parse(localStorage.getItem('userData')) || null
//   );
//   const [loading, setLoading] = useState(false);

//   const [tutors,setTutors]= useState([])
//   const [tutorsdata,setTutorsdata]=  useState([])

//   // Static tutor data from `data.js`
//   const tutorsData = data; // Keep this to provide tutor data

//   const currencySymbol = '$';
//   const backendURL = 'http://localhost:4000';

//   // Fetch user profile from backend
//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Get token

//       if (!token) {
//         console.error('No token found. User may not be logged in.');
//         return;
//       }

//       setLoading(true);
//       const res = await fetch(`${backendURL}/user/get-profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Send token
//         },
//       });

//       if (res.ok) {
//         const data = await res.json();

//         if (data.userData) {
//           setUserData(data.userData); // Update userData state
//           localStorage.setItem('userData', JSON.stringify(data.userData)); // Cache data
//         } else {
//           console.error('Invalid userData received:', data);
//         }
//       } else {
//         const errorData = await res.json();
//         console.error('Failed to fetch profile:', errorData.message || 'Unknown error');
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch user profile when token exists
//   useEffect(() => {
//     if (token) {
//       fetchData(); // Fetch profile data when token exists
//     }
//   }, [token]);

//   const getAllTutors = async () => {
//     try {
//       const { data: res } = await axios.post(`${backendURL}/api/tutor/all-tutors`);
//       if (res.success) {
//         setTutors(res.tutors); // Update tutors state
//         console.log(res.tutors);
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const getTutorsData = async () => {
//     try {
//       const { data: res } = await axios.get(`${backendURL}/api/tutor/list`);
//       if (res.success) {
//         setTutorsdata(res.message); // Update tutorsdata state
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
  
  
//    useEffect(()=>{
//       getTutorsData()
//    },[])

//   const value = {
//     token,
//     setToken,
//     userData,
//     setUserData,
//     tutorsData, // Provide tutors data here
//     loading,
//     currencySymbol,
//     backendURL,
//     tutors,
//     getAllTutors,
//     getTutorsData
   
//   };

//   return (
//   <AContext.Provider value={value}>
//     {children}
//     </AContext.Provider>
//   )
// };

// export default AppContext;



import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { data } from '../Data.js'; // Static tutor data
import axios from 'axios'


// Create Context
export const AContext = createContext();

const AppContext = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData')) || null
  );
  const [loading, setLoading] = useState(false);

  const [tutors,setTutors]= useState([])
  const [tutorsdata,setTutorsdata]=  useState([])

  
  const tutorsData = data; 
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

  const getAllTutors = async () => {
    try {
      const { data: res } = await axios.post(`${backendURL}/api/tutor/all-tutors`);
      if (res.success) {
        setTutors(res.tutors); // Update tutors state
        console.log(res.tutors);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getTutorsData = async () => {
    try {
      const { data: res } = await axios.get(`${backendURL}/api/tutor/list`);
      if (res.success) {
        setTutorsdata(res.message); // Update tutorsdata state
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  
   useEffect(()=>{
      getTutorsData()
   },[])

  const value = {
    token,
    setToken,
    userData,
    setUserData,
    tutorsData, // Provide tutors data here
    loading,
    currencySymbol,
    backendURL,
    tutors,
    getAllTutors,
    getTutorsData
   
  };

  return (
  <AContext.Provider value={value}>
    {children}
    </AContext.Provider>
  )
};

export default AppContext;

