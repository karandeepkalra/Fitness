

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './footer.css';
// import logo from '../../../assets/logoooo.jpg';

// const Footer = () => {
//   const navigate = useNavigate(); // Initialize navigate


//   return (
//     <>
//       <div className='footer'>
//         <div className='Footer'>
//           <div className='footelement' id="el1">
//             <div className='ins' id='logotitle'>
//               <div className='log'><img className='imgadj' src={logo} alt='Logo' /></div>
//               <div className='log'>Fitnesso</div>
//             </div>
//             <div className='ins' id='abt'>
//               <p>We are a passionate team of fitness experts who have come together to bridge the gap 
//                 between instructors and students. We have created a platform where instructors and students can interact irrespective of physical 
//                 boundaries.</p>
//             </div>
//           </div>
//           <div className='footelement' id="el2">
//             <div className='compname'>
//               <p className='enlarge'>COMPANY</p>
//             </div>
//             <div className='items'>
//               <ul className='navitems'>
//                 <li onClick={() => navigate('/')}>Home</li> {/* Navigate to Home */}
//                 <li onClick={() => navigate('/about')}>About Us</li> {/* Navigate to About */}
//                 <li onClick={() => navigate('/Tutors')}>All Tutors</li> {/* Navigate to Contact */}
//                 <li onClick={() => navigate('/contact')}>Contact</li> {/* Navigate to Contact */}
                
//               </ul>
//             </div>
//           </div>
//           <div className='footelement' id="el3">
//             <div className='get'>
//               <p className='enlarge'>GET IN TOUCH</p>
//             </div>
//             <div className='em'>
//               <p>+91-745-185-2480</p>
//               <p>am8819356@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='copywright'>
//         <hr />
//         <p>Copyright 2024@ Fitnesso - All Rights Reserved</p>
//       </div>
      
//     </>
//   );
// };


// export default Footer;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './footer.css';

// const Footer = () => {
//     const navigate = useNavigate();

//     return (
//         <footer className="footer">
//             <div className="container">
//                 <div className="footer-grid">
//                     {/* Brand Section */}
//                     <div className="brand-section">
//                         <div className="brand-logo">
//                             <span className="brand-fit">Fit</span>
//                             <span className="brand-nesso">nesso</span>
//                         </div>
//                         <p className="brand-description">
//                             We are a passionate team of fitness experts who have come together to bridge the gap 
//                             between instructors and students. We have created a platform where instructors and 
//                             students can interact irrespective of physical boundaries.
//                         </p>
//                     </div>

//                     {/* Company Links */}
//                     <div className="company-links">
//                         <h3 className="section-title">COMPANY</h3>
//                         <ul className="link-list">
//                             <li>
//                                 <button onClick={() => navigate('/')} className="link">
//                                     Home
//                                 </button>
//                             </li>
//                             <li>
//                                 <button onClick={() => navigate('/about')} className="link">
//                                     About Us
//                                 </button>
//                             </li>
//                             <li>
//                                 <button onClick={() => navigate('/contact')} className="link">
//                                     Contact
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div className="contact-info">
//                         <h3 className="section-title">GET IN TOUCH</h3>
//                         <div className="contact-details">
//                             <a href="tel:+917451852480" className="contact-item">
//                                 +91-745-185-2480
//                             </a>
//                             <a href="mailto:am8819356@gmail.com" className="contact-item">
//                                 am8819356@gmail.com
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom */}
//                 <div className="footer-bottom">
//                     <p className="copyright">
//                         Copyright 2024@ Fitnesso - All Rights Reserved
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="brand-section">
                        <div className="brand-logo">
                            <span className="brand-fit">Fit</span>
                            <span className="brand-nesso">nesso</span>
                        </div>
                        <p className="brand-description">
                            We are a passionate team of fitness experts who have come together to bridge the gap 
                            between instructors and students. We have created a platform where instructors and 
                            students can interact irrespective of physical boundaries.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="company-links">
                        <h3 className="sec-title">COMPANY</h3>
                        <ul className="link-list">
                            <li>
                                <button onClick={() => navigate('/')} className="link">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/about')} className="link">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/contact')} className="link">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="sec-title">GET IN TOUCH</h3>
                        <div className="contact-details">
                            <a href="tel:+917451852480" className="contact-item">
                                +91-745-185-2480
                            </a>
                            <a href="mailto:am8819356@gmail.com" className="contact-item">
                                am8819356@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="copyright">
                        Copyright 2024@ Fitnesso - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

