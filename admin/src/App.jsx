import React from 'react'
import Login from './components/Pages/Login/Login'
import Navbar from './components/Pages/Navbar/Navbar';
import Sidebar from './components/Pages/Sidebar/Sidebar';

const App = () => {
  return (
    
    <div>
      <Navbar />
      <Login />
      <Sidebar />
    </div>
  )
}

export default App