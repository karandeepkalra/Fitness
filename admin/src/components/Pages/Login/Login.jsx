import React,{useState} from 'react'
// import{assests} from '../assers/assests'
import './Login.css'
const Login = () => {
    const [state,setState]=useState('Admin')
  return (
   <form className="head">
    <div className='main'>
     <p><span>{state}</span>Login</p>
     <div>
        <p>Email</p>
        <input type="email" required/>
     </div>
     <div>
        <p>Password</p>
        <input type='password' required />
    </div>
    <button>Login</button>
    {
        state==='Admin'
        ?<p>Doctor Login <span onClick={()=>setState('Doctor')}>Click here</span></p>
        :<p>Admin Login <span  onClick={()=>setState('Admin')}>Click here</span></p>
    }
    </div>
   </form>
  )
}

export default Login