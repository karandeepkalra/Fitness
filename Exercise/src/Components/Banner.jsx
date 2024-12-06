import React from 'react'
import banner from '../assets/banner.jpg'
import { useNavigate } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className='banner-text'>
                    <p>Book Classes</p>
                    <p className='banner-subtitle'>With 50+ Experienced Trainers</p>
                </div>
                <button onClick={() => navigate('/login')} className='banner-button'>Create account</button>
            </div>
            <div className='banner-image-container'>
                <img className='banner-image' src={banner} alt='/' />
            </div>
        </div>
    )
}

export default Banner