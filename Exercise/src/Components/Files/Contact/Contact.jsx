import React from 'react'
import contact from '../../../assets/contact.jpeg'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-header">
           <p>CONTACT <span className="contact-us-highlight">US</span></p>
        </div>
        <div className="contact-content">
            <img className="contact-image" src={contact} alt="Contact"/>

            <div className="contact-info"> 
                <p className="office-title">OUR OFFICE</p>
                <p className="contact-address">58100 Willms Station<br/> Swite 350, Washington, USA</p>
                <p className="contact-details">Tel:(415) 55-0132<br/>Email:abc123@gmail.com</p>
                <p className="careers-title">Careers at FITNESSO</p>
                <p className="careers-description">Lorem ipsum dolor sit amet.</p>
                <button className="explore-jobs-btn">Explore Jobs</button>
            </div>
        </div>
    </div>
  )
}

export default Contact