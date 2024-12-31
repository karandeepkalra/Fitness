// import React from 'react'
// import './footer.css'
// import logo from "../../../assets/logo.jpg";


// const Footer = () => {
//   return (
//     <>
//     <div className='footer'>
//       <div className='Footer'>
//         <div className='footelement' id="el1">
//           <div className='ins' id='logotitle'>
//             <div className='log'><img className='imgadj' src={logo} alt='/'/></div>
//             <div className='log'>Fitnesso</div>
//           </div>
//           <div className='ins' id='abt'>
//             <p>We are a passionate team of fitness experts who have come together to bridge the gap 
//               between instructors and students.We have created a platform where instructors and students can interact irrespective of physical 
//               boundaries .</p>
//           </div>
//         </div>
//         <div className='footelement' id="el2">
//           <div className='compname'>
//             <p className='enlarge'>COMPANY</p>
//           </div>
//           <div className='items'>
//             <ul className='navitems'>
//               <li>Home</li>
//               <li>About Us</li>
//               <li>Contact</li>
//               <li>Privacy policy</li>
//             </ul>
//           </div>
//         </div>
//         <div className='footelement' id="el3">
//           <div className='get'>
//             <p className='enlarge'>GET IN TOUCH</p>
//           </div>
//           <div className='em'>
//             <p>+91-745-185-2480</p>
//             <p>am8819356@gmail.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className='copywright'>
//       <hr/>
//       <p>Copyright 2024@ Fitnesso - All Rights Reserved</p>
//     </div>
//     </>
//   )
// }

// export default Footer

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './footer.css';
import logo from '../../../assets/logoooo.jpg';

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <>
      <div className='footer'>
        <div className='Footer'>
          <div className='footelement' id="el1">
            <div className='ins' id='logotitle'>
              <div className='log'><img className='imgadj' src={logo} alt='Logo' /></div>
              <div className='log'>Fitnesso</div>
            </div>
            <div className='ins' id='abt'>
              <p>We are a passionate team of fitness experts who have come together to bridge the gap 
                between instructors and students. We have created a platform where instructors and students can interact irrespective of physical 
                boundaries.</p>
            </div>
          </div>
          <div className='footelement' id="el2">
            <div className='compname'>
              <p className='enlarge'>COMPANY</p>
            </div>
            <div className='items'>
              <ul className='navitems'>
                <li onClick={() => navigate('/')}>Home</li> {/* Navigate to Home */}
                <li onClick={() => navigate('/about')}>About Us</li> {/* Navigate to About */}
                <li onClick={() => navigate('/contact')}>Contact</li> {/* Navigate to Contact */}
              </ul>
            </div>
          </div>
          <div className='footelement' id="el3">
            <div className='get'>
              <p className='enlarge'>GET IN TOUCH</p>
            </div>
            <div className='em'>
              <p>+91-745-185-2480</p>
              <p>am8819356@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='copywright'>
        <hr />
        <p>Copyright 2024@ Fitnesso - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;