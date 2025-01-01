import React from 'react';
import { Calendar, Clock, Shield, UserCheck } from 'lucide-react';
import './DoctorLandingPage.css';
import banner from '../../../assets/banner.jpg'
import { Link } from 'react-router-dom';



const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

const DoctorLandingPage = () => {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <div className="header-tag">HEALTHCARE MADE SIMPLE</div>
        
        <div className="main-content">
          {/* Left Content */}
          <div className="text-content">
            <h1 className="main-title">
              Your Health, Our Priority: Book Doctor Appointments Online
            </h1>
            
            <p className="description">
              Schedule appointments with qualified healthcare professionals instantly. 
              Experience convenient, reliable, and patient-focused medical care at your fingertips.
            </p>

            <div className="features-grid">
              <Card className="feature-card">
                <div className="feature-content">
                  <Calendar className="feature-icon" />
                  <span className="feature-text">Easy Scheduling</span>
                </div>
              </Card>

              <Card className="feature-card">
                <div className="feature-content">
                  <Clock className="feature-icon" />
                  <span className="feature-text">24/7 Access</span>
                </div>
              </Card>

              <Card className="feature-card">
                <div className="feature-content">
                  <Shield className="feature-icon" />
                  <span className="feature-text">Verified Doctors</span>
                </div>
              </Card>

              <Card className="feature-card">
                <div className="feature-content">
                  <UserCheck className="feature-icon" />
                  <span className="feature-text">Patient Support</span>
                </div>
              </Card>
            </div>

            <button className="booking-button" >
            <Link to="/Tutors" className="cta-button">Get Started</Link>
                
            </button>
          </div>

          {/* Right Image Container */}
          <div className="image-section">
            <div className="image-wrapper">
              <div className="circle-decoration top-left"></div>
              <div className="circle-decoration bottom-right"></div>
              <div className="image-placeholder">
              <img 
    src= {banner}
    alt="Healthcare professional"
    className="image-placeholder"
   />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLandingPage;