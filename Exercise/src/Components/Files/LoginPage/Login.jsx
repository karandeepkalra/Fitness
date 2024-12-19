// import React, { useState,useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import './Login.css';
// import { AContext } from "../Context/AppContext";
// import {toast} from 'react-toastify'
// const Login = () => {
//     const {backendURL,token,setToken}=useContext(AContext)
//     const navigate = useNavigate(); // For navigation
//     const [state, setState] = useState('Sign Up'); // To toggle between Sign Up and Login
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [error, setError] = useState(''); // For displaying error messages

//     // Form submission handler
//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         console.log("Form Submitted");

//         try 
//         {
//             if (state === 'Sign Up')
//             {
//                 // Sign-Up Logic
//                 // const {data}=await axios.post(backendURL+'/user/',{name,password,email})

//                 const { data } = await axios.post(`${backendURL}/user/`, { name, password, email });


//                 if(data.success)
//                 {
//                     localStorage.setItem('token',data.token)
//                     navigate("/Home");
//                     setToken(data.token)
//                 }
//                 else{
//                     toast.error(data.message)
//                 }
                   
//             } 
//             else{
//                 const { data } = await axios.post(backendURL + '/user/login', { password, email });

//                 if(data.success)
//                 {
//                     localStorage.setItem('token',data.token)
//                     setToken(data.token)
//                 }
//                 else{
//                     toast.error(data.message)
//                 }
//             }
//         } 
//         catch (error) {
//             toast.error(error.message)
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className="bodies">
//             <div>
//                 <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//                 <p className="ques">Please {state === 'Sign Up' ? "Create Account" : "Login"} to continue</p>

//                 {state === "Sign Up" && (
//                     <div className="name">
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             required
//                         />
//                     </div>
//                 )}

//                 <div className="email">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         required
//                     />
//                 </div>

//                 <div className="pass">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         required
//                     />
//                 </div>

//                 {error && <p className="error">{error}</p>}

//                 <button type="submit" className="btn1">
//                     {state === 'Sign Up' ? "Create Account" : "Login"}
//                 </button>

//                 {state === 'Sign Up' ? (
//                     <p>
//                         Already have an account?{' '}
//                         <span onClick={() => setState('Login')} className="log">Login</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Create a new account?{' '}
//                         <span onClick={() => setState('Sign Up')} className="create">Click here</span>
//                     </p>
//                 )}
//             </div>
//         </form>
//     );
// };

// export default Login;




// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import './Login.css';
// import { AContext } from "../Context/AppContext";
// import { toast } from 'react-toastify';

// const Login = () => {
//     const { backendURL, token, setToken } = useContext(AContext);
//     const navigate = useNavigate();
//     const [state, setState] = useState('Sign Up'); // Toggle between Sign Up and Login
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//             console.log(`Submitting form in state: ${state}`);
        
//             try {
//                 if (state === 'Sign Up') {
//                     // Check if email is already registered
//                     const { data } = await axios.post(`${backendURL}/user/check`, { email });
        
//                     if (data.exists) {
//                         console.log("Email already registered. Redirecting to Login...");
//                         toast.info("Email already registered. Redirecting to Login...");
//                         setState('Login'); // Switch to Login page
//                         return;
//                     }
        
//                     // Proceed with signup
//                     const response = await axios.post(`${backendURL}/user/`, { name, password, email });
//                     if (response.data.success) {
//                         console.log("User registered successfully. Redirecting to Home...");
//                         localStorage.setItem('token', response.data.token);
//                         setToken(response.data.token);
//                         navigate("/Home");
//                     } else {
//                         toast.error(response.data.message);
//                     }
//                 } else {
//                     // Login logic
//                     const { data } = await axios.post(`${backendURL}/user/login`, { email, password });
//                     if (data.success) {
//                         localStorage.setItem('token', data.token);
//                         setToken(data.token);
//                         navigate("/Home");
//                     } else {
//                         toast.error(data.message);
//                     }
//                 }
//             } catch (error) {
//                 console.error("Error in form submission:", error);
//                 toast.error(error.message || "Something went wrong!");
//             }
//         };
        
//     return (
//         <form onSubmit={onSubmitHandler} className="bodies">
//             <div>
//                 <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//                 <p className="ques">Please {state === 'Sign Up' ? "Create Account" : "Login"} to continue</p>

//                 {state === "Sign Up" && (
//                     <div className="name">
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             required
//                         />
//                     </div>
//                 )}

//                 <div className="email">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         required
//                     />
//                 </div>

//                 <div className="pass">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn1">
//                     {state === 'Sign Up' ? "Create Account" : "Login"}
//                 </button>

//                 {state === 'Sign Up' ? (
//                     <p>
//                         Already have an account?{' '}
//                         <span onClick={() => setState('Login')} className="log">Login</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Create a new account?{' '}
//                         <span onClick={() => setState('Sign Up')} className="create">Click here</span>
//                     </p>
//                 )}
//             </div>
//         </form>
//     );
// };

// export default Login;






// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import './Login.css';
// import { AContext } from "../Context/AppContext";
// import { toast } from 'react-toastify';

// const Login = () => {
//     const { backendURL, token, setToken } = useContext(AContext);
//     const navigate = useNavigate();
    
//     // If a user is already logged in, redirect them to the Home page
//     useEffect(() => {
//         if (token) {
//             navigate("/");
//         }
//     }, [token, navigate]);

//     const [state, setState] = useState('Sign Up'); // Toggle between Sign Up and Login
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [loading, setLoading] = useState(false);  // Loading state

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         console.log(`Submitting form in state: ${state}`);
//         setLoading(true);  // Start loading state
        
//         try {
//             if (state === 'Sign Up') {
//                 // Check if email is already registered
//                 const { data } = await axios.post(`${backendURL}/user/check`, { email });

//                 if (data.exists) {
//                     console.log("Email already registered. Redirecting to Login...");
//                     toast.info("Email already registered. Redirecting to Login...");
//                     setState('Login'); // Switch to Login page
//                     setLoading(false);
//                     return;
//                 }

//                 // Proceed with signup
//                 const response = await axios.post(`${backendURL}/user/`, { name, password, email });
//                 if (response.data.success) {
//                     console.log("User registered successfully. Redirecting to Home...");
//                     toast.success("User registered successfully. Redirecting to Home...");
//                     localStorage.setItem('token', response.data.token);
//                     setToken(response.data.token);
//                     navigate("/Home");
//                 } else {
//                     toast.error(response.data.message || "Failed to create an account.");  // Show error message from backend
//                 }
//             } else {
//                 // Login logic
//                 const { data } = await axios.post(`${backendURL}/user/login`, { email, password });
     
     
//                 if (data.success) {
//                     toast.success("Logged in successfully!");
//                     localStorage.setItem('token', data.token);
//                     setToken(data.token);
//                     navigate("/Home");
//                 } else {
//                     toast.error(data.message || "Invalid credentials. Please try again.");  // Show error message from backend
//                 }
//             }
//         } catch (error) {
//             console.error("Error in form submission:", error);
//             toast.error(error.message || "Something went wrong!");  // Show error message from exception
//         } finally {
//             setLoading(false);  // Stop loading state
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className="bodies">
//             <div>
//                 <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//                 <p className="ques">Please {state === 'Sign Up' ? "Create Account" : "Login"} to continue</p>

//                 {state === "Sign Up" && (
//                     <div className="name">
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             required
//                         />
//                     </div>
//                 )}

//                 <div className="email">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         required
//                     />
//                 </div>

//                 <div className="pass">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn1" disabled={loading}>
//                     {loading ? "Loading..." : state === 'Sign Up' ? "Create Account" : "Login"}
//                 </button>

//                 {state === 'Sign Up' ? (
//                     <p>
//                         Already have an account?{' '}
//                         <span onClick={() => setState('Login')} className="log">Login</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Create a new account?{' '}
//                         <span onClick={() => setState('Sign Up')} className="create">Click here</span>
//                     </p>
//                 )}
//             </div>
//         </form>
//     );
// };

// export default Login;

// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import validator from 'validator';
// import './Login.css';
// import { AContext } from "../Context/AppContext";
// import { toast } from 'react-toastify';

// const Login = () => {
//     const { backendURL, token, setToken } = useContext(AContext);
//     const navigate = useNavigate();

//     // Redirect if already logged in
//     useEffect(() => {
//         if (token) {
//             navigate("/Home");
//         }
//     }, [token, navigate]);

//     const [state, setState] = useState('Sign Up');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [loading, setLoading] = useState(false);

//     // Debugging logs to ensure component mounts and state updates
//     console.log("Component rendered. Current state:", { state, email, password, name });

//     const validateInputs = () => {
//         console.log("validateInputs called. Input values:", { name, email, password });
//         if (state === 'Sign Up' && name.trim() === '') {
//             console.log("Validation failed: Name is empty");
//             toast.error("Name cannot be empty.");
//             return false;
//         }
//         if (!validator.isEmail(email)) {
//             console.log("Validation failed: Invalid email format");
//             toast.error("Please enter a valid email address.");
//             return false;
//         }
//         if (password.length < 8) {
//             console.log("Validation failed: Password too short");
//             toast.error("Password must be at least 8 characters long.");
//             return false;
//         }
//         console.log("All validations passed");
//         return true;
//     };

//     const onSubmitHandler = async (event) => {
//         console.log("Form submitted");
//         event.preventDefault();
//         if (!validateInputs()) return;

//         setLoading(true);
//         try {
//             if (state === 'Sign Up') {
//                 console.log("Attempting sign-up...");
//                 const { data } = await axios.post(`${backendURL}/user/`, { name, email, password });
//                 if (data.success) {
//                     console.log("Sign-up successful. Data received:", data);
//                     toast.success("Account created successfully!");
//                     localStorage.setItem('token', data.token);
//                     setToken(data.token);
//                     navigate("/Home");
//                 } else {
//                     console.log("Sign-up failed:", data.message);
//                     toast.error(data.message);
//                 }
//             } else {
//                 console.log("Attempting login...");
//                 const { data } = await axios.post(`${backendURL}/user/login`, { email, password });
//                 if (data.success) {
//                     console.log("Login successful. Data received:", data);
//                     toast.success("Login successful!");
//                     localStorage.setItem('token', data.token);
//                     setToken(data.token);
//                     navigate("/Home");
//                 } else {
//                     console.log("Login failed:", data.message);
//                     toast.error(data.message);
//                 }
//             }
//         } catch (error) {
//             console.log("Error during request:", error);
//             toast.error(error.response?.data?.message || "An error occurred.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className="bodies">
//             <div>
//                 <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//                 <p className="ques">Please {state === 'Sign Up' ? "Create Account" : "Login"} to continue</p>

//                 {state === "Sign Up" && (
//                     <div className="name">
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             onChange={(e) => {
//                                 console.log("Name updated:", e.target.value);
//                                 setName(e.target.value);
//                             }}
//                             value={name}
//                             required
//                         />
//                     </div>
//                 )}

//                 <div className="email">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => {
//                             console.log("Email updated:", e.target.value);
//                             setEmail(e.target.value);
//                         }}
//                         value={email}
//                         required
//                     />
//                 </div>

//                 <div className="pass">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => {
//                             console.log("Password updated:", e.target.value);
//                             setPassword(e.target.value);
//                         }}
//                         value={password}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn1" disabled={loading}>
//                     {loading ? "Loading..." : state === 'Sign Up' ? "Create Account" : "Login"}
//                 </button>

//                 {state === 'Sign Up' ? (
//                     <p>
//                         Already have an account?{' '}
//                         <span onClick={() => setState('Login')} className="log">Login</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Create a new account?{' '}
//                         <span onClick={() => setState('Sign Up')} className="create">Click here</span>
//                     </p>
//                 )}
//             </div>
//         </form>
//     );
// };

// export default Login;



// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import validator from 'validator';
// import './Login.css';
// import { AContext } from "../Context/AppContext";

// const Login = () => {
//     const { backendURL, token, setToken } = useContext(AContext);
//     const navigate = useNavigate();

//     // Redirect if already logged in
//     useEffect(() => {
//         if (token) {
//             navigate("/Home");
//         }
//     }, [token, navigate]);

//     const [state, setState] = useState('Sign Up');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(''); // State to store error messages

//     const validateInputs = () => {
//         if (state === 'Sign Up' && name.trim() === '') {
//             setError("Name cannot be empty.");
//             return false;
//         }
//         if (!validator.isEmail(email)) {
//             setError("Please enter a valid email address.");
//             return false;
//         }
//         if (password.length < 8) {
//             setError("Password must be at least 8 characters long.");
//             return false;
//         }
//         setError(''); // Clear error if validation passes
//         return true;
//     };

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         if (!validateInputs()) return;

//         setLoading(true);
//         try {
//             let response;
//             if (state === 'Sign Up') {
//                 response = await axios.post(`${backendURL}/user/`, { name, email, password });
//             } else {
//                 response = await axios.post(`${backendURL}/user/login`, { email, password });
//             }

//             const { data } = response;
//             if (data.success) {
//                 localStorage.setItem('token', data.token);
//                 setToken(data.token);
//                 navigate("/Home");
//             } else {
//                 setError(data.message); // Display backend error on the front page
//             }
//         } catch (error) {
//             setError(error.response?.data?.message || "An error occurred. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className="bodies">
//             <div>
//                 <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//                 <p className="ques">Please {state === 'Sign Up' ? "Create Account" : "Login"} to continue</p>

//                 {error && <p className="error-message">{error}</p>} {/* Display error message */}

//                 {state === "Sign Up" && (
//                     <div className="name">
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             required
//                         />
//                     </div>
//                 )}

//                 <div className="email">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         required
//                     />
//                 </div>

//                 <div className="pass">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn1" disabled={loading}>
//                     {loading ? "Loading..." : state === 'Sign Up' ? "Create Account" : "Login"}
//                 </button>

//                 {state === 'Sign Up' ? (
//                     <p>
//                         Already have an account?{' '}
//                         <span onClick={() => setState('Login')} className="log">Login</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Create a new account?{' '}
//                         <span onClick={() => setState('Sign Up')} className="create">Click here</span>
//                     </p>
//                 )}
//             </div>
//         </form>
//     );
// };

// export default Login;






import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import './Login.css';
import { AContext } from "../Context/AppContext";

const Login = () => {
    const { backendURL, token, setToken } = useContext(AContext);
    const navigate = useNavigate();

    // Redirect if already logged in
    useEffect(() => {
        if (token) {
            navigate("/Home");
        }
    }, [token, navigate]);

    const [state, setState] = useState('Login'); // Start on Login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(''); // State to store error messages

    const validateInputs = () => {
        if (state === 'Sign Up' && name.trim() === '') {
            setError("Name cannot be empty.");
            return false;
        }
        if (!validator.isEmail(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return false;
        }
        setError(''); // Clear error if validation passes
        return true;
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!validateInputs()) return;

        setLoading(true);
        try {
            let response;
            if (state === 'Sign Up') {
                // Sign-Up logic
                response = await axios.post(`${backendURL}/user/`, { name, email, password });
            } else {
                // Login logic
                response = await axios.post(`${backendURL}/user/login`, { email, password });
            }

            const { data } = response;
            if (data.success) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                navigate("/Home");
            } else {
                setError(data.message); // Display backend error on the front page
            }
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="bodies">
            <div>
                <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
                <p className="ques">Please {state === 'Sign Up' ? "Create Account" : "Login"} to continue</p>

                {error && <p className="error-message">{error}</p>} {/* Display error message */}

                {state === "Sign Up" && (
                    <div className="name">
                        <input
                            type="text"
                            placeholder="Full Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                )}

                <div className="email">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>

                <div className="pass">
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                <button type="submit" className="btn1" disabled={loading}>
                    {loading ? "Loading..." : state === 'Sign Up' ? "Create Account" : "Login"}
                </button>

                {state === 'Sign Up' ? (
                    <p>
                        Already have an account?{' '}
                        <span onClick={() => setState('Login')} className="log">Login</span>
                    </p>
                ) : (
                    <p>
                        Create a new account?{' '}
                        <span onClick={() => setState('Sign Up')} className="create">Click here</span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';
// import { AContext } from "../Context/AppContext";
// import { toast } from 'react-toastify';

// const Login = () => {
//     const { backendURL, token, setToken } = useContext(AContext);
//     const navigate = useNavigate();
//     const [state, setState] = useState('Sign Up');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [error, setError] = useState('');

//     // Form submission handler
//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         try {
//             let response;
//             if (state === 'Sign Up') {
//                 // Sign-Up Logic
//                 response = await axios.post(`${backendURL}/user/`, { name, password, email });
//             } else {
//                 // Login Logic
//                 response = await axios.post(`${backendURL}/user/login`, { email, password });
//             }

//             if (response.data.success) {
//                 localStorage.setItem('token', response.data.token);
//                 setToken(response.data.token);
//                 navigate("/Home");
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className="bodies">
//             <div>
//                 <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//                 <p className="ques">Please {state === 'Sign Up' ? "Create Account" : "Login"} to continue</p>

//                 {state === "Sign Up" && (
//                     <div className="name">
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             required
//                         />
//                     </div>
//                 )}

//                 <div className="email">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         required
//                     />
//                 </div>

//                 <div className="pass">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         required
//                     />
//                 </div>

//                 {error && <p className="error">{error}</p>}

//                 <button type="submit" className="btn1">
//                     {state === 'Sign Up' ? "Create Account" : "Login"}
//                 </button>

//                 {state === 'Sign Up' ? (
//                     <p>
//                         Already have an account?{' '}
//                         <span onClick={() => setState('Login')} className="log">Login</span>
//                     </p>
//                 ) : (
//                     <p>
//                         Create a new account?{' '}
//                         <span onClick={() => setState('Sign Up')} className="create">Click here</span>
//                     </p>
//                 )}
//             </div>
//         </form>
//     );
// };

// export default Login;
