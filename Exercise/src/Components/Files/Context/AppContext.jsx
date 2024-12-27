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


// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { data } from '../Data.js'; // Static tutor data

// // Create Context
// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   // State for user authentication and profile
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userData, setUserData] = useState(
//     JSON.parse(localStorage.getItem('userData')) || null
//   );
//   const [loading, setLoading] = useState(false);

//   // Static tutor data from `data.js`
//   const tutorsData = data;

//   const currencySymbol = '$';
//   const backendURL = 'http://localhost:4000';

//   // Load user profile data from the API
//   const loadUserProfileData = async () => {
//     try {
//       if (!token) {
//         toast.error('Token not found.');
//         return;
//       }

//       // Avoid redundant API calls if userData is already present
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
//         setUserData(fetchedUserData); // Update context state
//         localStorage.setItem('userData', JSON.stringify(fetchedUserData)); // Cache user data
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

//   // Effect to automatically load user data if token is present
//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     } else {
//       setUserData(null); // Clear user data if token is missing
//     }
//   }, [token]);

//   // Context value for consumers
//   const value = {
//     token,
//     setToken,
//     userData,
//     setUserData,
//     loadUserProfileData,
//     tutorsData, // Expose static tutors data
//     loading,
//     currencySymbol,
//     backendURL,
//   };

//   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// };

// export default AppContext;





// // // AppContext.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { data } from '../Data.js'; // Ensure this import is correct

// // Create Context
// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userData, setUserData] = useState(
//     JSON.parse(localStorage.getItem('userData')) || null
//   );
//   const [loading, setLoading] = useState(false);

//   // Static tutor data from `data.js`
//   const tutorsData = data;  // Make sure tutorsData is assigned to your static data

//   const currencySymbol = '$';
//   const backendURL = 'http://localhost:4000';

//   // Context value for consumers
//   const value = {
//     token,
//     setToken,
//     userData,
//     setUserData,
//     tutorsData, // Ensure tutorsData is provided here
//     loading,
//     currencySymbol,
//     backendURL,
//   };

//   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// };

// export default AppContext;



// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { data } from '../Data.js'; // Static tutor data

// // Create Context
// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userData, setUserData] = useState(
//     JSON.parse(localStorage.getItem('userData')) || null
//   );
//   const [loading, setLoading] = useState(false);

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

//   // Context value for consumers
//   const value = {
//     token,
//     setToken,
//     userData,
//     setUserData,
//     tutorsData, // Provide tutors data here
//     loading,
//     currencySymbol,
//     backendURL,
//   };

//   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// };

// export default AppContext;



// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

// // Create Context
// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userData, setUserData] = useState(
//     JSON.parse(localStorage.getItem('userData')) || null
//   );
//   const [loading, setLoading] = useState(false);

//   // Backend URL (adjust as per your setup)
//   const backendURL = 'http://localhost:4000';

//   // Fetch user profile from backend
//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Get token

//       if (!token) {
//         console.error('No token found. User may not be logged in.');
//         return;
//       }

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
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchData(); // Fetch data when token exists
//     }
//   }, [token]);

//   // Context value for consumers
//   const value = {
//     token,
//     setToken,
//     userData,
//     setUserData,
//     loading,
//     setLoading,
//     backendURL,
//   };

//   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// };

// export default AppContext;



// // import React, { createContext, useState, useEffect } from 'react';
// // import { data } from '../Data'; // Ensure this path is correct

// // // Create Context
// // export const AContext = createContext();

// // const AppContext = ({ children }) => {
// //   const [token, setToken] = useState(localStorage.getItem('token') || null);
// //   const [userData, setUserData] = useState(
// //     JSON.parse(localStorage.getItem('userData')) || null
// //   );
// //   const [loading, setLoading] = useState(false);

// //   // Static tutor data from `data.js`
// //   const tutorsData = Array.isArray(data) ? data : [];  // Ensure data is an array

// //   // Simulating loading state for demonstration purposes (remove if unnecessary)
// //   useEffect(() => {
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false); // Stop loading after 2 seconds for demonstration
// //     }, 2000);
// //   }, []);

// //   // Context value for consumers
// //   const value = {
// //     token,
// //     setToken,
// //     userData,
// //     setUserData,
// //     tutorsData, // Ensure tutorsData is provided here
// //     loading,
// //   };

// //   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// // };

// // export default AppContext;



// import React, { createContext, useState, useEffect, useMemo } from 'react';
// import { data } from '../Data'; // Ensure this path is correct

// // Create Context
// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token') || null);
//   const [userData, setUserData] = useState(() => {
//     try {
//       return JSON.parse(localStorage.getItem('userData')) || null;
//     } catch (error) {
//       console.error('Error parsing user data from localStorage:', error);
//       return null;
//     }
//   });
//   const [loading, setLoading] = useState(false);

//   // Static tutor data from `data.js`
//   const tutorsData = Array.isArray(data) ? data : [];  // Ensure data is an array

//   // Simulating loading state for demonstration purposes (remove if unnecessary)
//   useEffect(() => {
//     setLoading(true);
//     // Simulating API call for loading data
//     setTimeout(() => {
//       setLoading(false); // Stop loading after 2 seconds for demo
//     }, 2000);
//   }, []);

//   // Context value for consumers
//   const value = useMemo(() => ({
//     token,
//     setToken,
//     userData,
//     setUserData,
//     tutorsData, // Ensure tutorsData is provided here
//     loading,
//   }), [token, userData, tutorsData, loading]);

//   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// };

// export default AppContext;



















// current working 
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


//   // const changeAvailability = async (tutId) =>{
//   //   try{
//   //         const {data} = await axios.post(backendURL+ '/api/tutor/change-availability',{tutId})
//   //         if (data.success)
//   //         {
//   //           toast.success(data.message)
//   //           getAllTutors()
//   //         }
//   //         else
//   //         {
//   //           toast.error(data.message)
//   //         }
//   //   }
//   //   catch(error)
//   //   {
//   //     toast.error(error.message)
//   //   }
//   // }
//   // Context value for consumers
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
   
  };

  return (
  <AContext.Provider value={value}>
    {children}
    </AContext.Provider>
  )
};

export default AppContext;

// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const AContext = createContext();

// const AppContext = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [tutorsData, setTutorsData] = useState([]);
//   const backendUrl = "http://localhost:4000";

//   const getAllTutors = async () => {
//     try {
//       const { data: res } = await axios.post(`${backendUrl}/api/tutor/all-tutors`);
//       if (res.success) {
//         setTutorsData(res.tutors);
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       toast.error("Error fetching tutors");
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getAllTutors();
//   }, []);

//   const value = {
//     token,
//     setToken,
//     tutorsData,
//     backendUrl,
//     getAllTutors,
//   };

//   return <AContext.Provider value={value}>{children}</AContext.Provider>;
// };

// export default AppContext;


