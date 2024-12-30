import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="outer">
        <div className="box" id="hometext">
            <div className="tagbox" id="tag1">
                <p className="capitalize">Book Appointment With Trusted Doctors</p>
            </div>
            <div className="tagbox" id="tag2">
                <p>Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.</p>
            </div>
            <div className="tagbox" id="tag3"> 
             <a  href= "/Tutors" >
             <button className='btn' id="empty">Book Appointment</button>
            </a>
            </div>
            
        </div>
        <div className="box" id="imgbox">
            <div className="imbox" id="im1"> 
            </div>
            <div className="imbox" id="im2">    
            </div>
            <div className="imbox" id="im3">    
            </div>
       
        </div>
      </div>
    </div>
  )
}

export default Header
