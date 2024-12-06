import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Sign Up') {
                // Sign Up logic
                const response = await axios.post('http://localhost:4000/user/', {
                    name,
                    email,
                    password
                });

                if (response.data.success) {
                    console.log('Sign Up Successful:', response.data);
                    navigate('/Home');
                } else {
                    setError(response.data.message);
                }
            } else {
                // Login logic
                const response = await axios.post('http://localhost:4000/user/login', {
                    email,
                    password
                });

                if (response.data.success) {
                    console.log('Login Successful:', response.data);
                    // Save token to context or localStorage
                    navigate('/Home');
                } else {
                    setError(response.data.message);
                }
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Something went wrong!');
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='bodies'>
            <div>
                <p className="main">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
                <p className='ques'>Please {state === 'Sign Up' ? "Create Account" : "Login"} to book appointment</p>

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

                <div className='email'>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>

                <div className='pass'>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit" className='btn1'>
                    {state === 'Sign Up' ? "Create Account" : "Login"}
                </button>

                {state === 'Sign Up' ? (
                    <p>Already have an account?
                        <span onClick={() => setState('Login')} className="log">Login</span>
                    </p>
                ) : (
                    <p>Create a new account?
                        <span onClick={() => setState('Sign Up')} className="create">Click here</span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;
