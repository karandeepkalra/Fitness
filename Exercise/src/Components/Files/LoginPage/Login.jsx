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
