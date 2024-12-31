// import React from 'react'
// import banner from '../../../assets/banner.jpg'
// import { useNavigate } from 'react-router-dom'
// import './Banner.css'

// const Banner = () => {
//     const navigate = useNavigate();
//     return (
//         <div className='banner-container'>
//             <div className='banner-content'>
//                 <div className='banner-text'>
//                     <p>Book Classes</p>
//                     <p className='banner-subtitle'>With 50+ Experienced Trainers</p>
//                 </div>
//             </div>
//             <div className='banner-image-container'>
//                 <img className='banner-image' src={banner} alt='/' />
//             </div>
//         </div>
//     )
// }

// export default Banner


import React from 'react'
import banner from '../../../assets/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className='banner-text'>
                    <h1>Book Appointment</h1>
                    <p className='banner-subtitle'>With 100+ Trusted Doctors</p>
                </div>
            </div>
            <div className='banner-image-container'>
                <div className='image-wrapper'>
                    <img className='banner-image' src={banner} alt='Doctor' />
                </div>
            </div>
        </div>
    )
}

export default Banner