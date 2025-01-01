// import React from 'react'
// import contact from '../../../assets/contact.jpeg'
// import './contact.css'

// const Contact = () => {
//   return (
//     <div className="contact-container">
//         <div className="contact-header">
//            <p>CONTACT <span className="contact-us-highlight">US</span></p>
//         </div>
//         <div className="contact-content">
//             <img className="contact-image" src={contact} alt="Contact"/>

//             <div className="contact-info"> 
//                 <p className="office-title">OUR OFFICE</p>
//                 <p className="contact-address">58100 Willms Station<br/> Swite 350, Washington, USA</p>
//                 <p className="contact-details">Tel:(415) 55-0132<br/>Email:abc123@gmail.com</p>
//                 <p className="careers-title">Careers at FITNESSO</p>
//                 <p className="careers-description">Lorem ipsum dolor sit amet.</p>
//                 {/* <button className="explore-jobs-btn">Explore Jobs</button> */}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact



import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  // Function to handle social media clicks
  const handleSocialClick = (platform) => {
    const links = {
      facebook: 'https://www.facebook.com/YourPageName',
      twitter: 'https://twitter.com/YourHandle',
      instagram: 'https://www.instagram.com/YourHandle'
    };
    
    // Open in new tab
    window.open(links[platform], '_blank', 'noopener noreferrer');
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1>Contact <span className="highlight">Us</span></h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <MapPin size={24} className="icon" />
              <p>58100 Willms Station, Suite 350, Washington, USA</p>
            </div>
            
            <div className="info-item">
              <Phone size={24} className="icon" />
              <p>(415) 55-0132</p>
            </div>
            
            <div className="info-item">
              <Mail size={24} className="icon" />
              <p>abc123@gmail.com</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <button 
                onClick={() => handleSocialClick('facebook')} 
                className="social-icon"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')} 
                className="social-icon"
                aria-label="Visit our Twitter profile"
              >
                <Twitter size={24} />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')} 
                className="social-icon"
                aria-label="Visit our Instagram profile"
              >
                <Instagram size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-wrapper {
          min-height: 100vh;
          background-color: #f5f5f5;
          padding: 40px 20px;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          text-align: center;
        }

        .highlight {
          color: #fbbf24;
        }

        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .icon {
          color: #fbbf24;
          min-width: 24px;
        }

        .social-links {
          text-align: center;
        }

        .social-links h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: #f3f4f6;
          border-radius: 50%;
          color: #4b5563;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .social-icon:hover {
          background-color: #fbbf24;
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 20px;
          }

          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;