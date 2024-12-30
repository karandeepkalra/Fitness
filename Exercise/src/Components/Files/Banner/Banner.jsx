import React from 'react'
import banner from '../../../assets/banner.jpg'
import { useNavigate } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className='banner-text'>
                    <h1>Book Classes</h1>
                    <h1 className='banner-subtitle'>With 50+ Experienced Trainers</h1>
                </div>
                {/* <button onClick={() => navigate('/')} className='banner-button'>Create account</button> */}
            </div>
            <div className='banner-image-container'>
                <img className='banner-image' src={banner} alt='/' />
            </div>
        </div>
    )
}

export default Banner