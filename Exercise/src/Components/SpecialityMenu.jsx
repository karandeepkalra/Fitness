import React from 'react'
import class1 from '../assets/classes-1.jpg'
import class2 from '../assets/classes-2.jpg'
import class3 from '../assets/classes-3.jpg'
import class4 from '../assets/classes-4.jpg'
import class5 from '../assets/classes-5.jpg'
import class6 from '../assets/classes-6.jpg'
import { Link } from 'react-router-dom'
import './specialityMenu.css'

const SpecialityMenu = () => {
    const specialityData = [
        {
            speciality: 'Clinical Exercise',
            image: class1
        },
        {
            speciality: 'Neurological Rehabilitation',
            image: class2
        },
        {
            speciality: 'Aquatic Therapy ',
            image: class3
        },
        {
            speciality: 'Geriatric Exercise',
            image: class4
        },
        {
            speciality: 'Sports Therapy',
            image: class5
        },
        {
            speciality: 'Occupational Therapy',
            image: class6
        }
    ]

    return (
        <div className="speciality-container" id="speciality">
            <h1 className="speciality-title">Find by Speciality</h1>
            <p className="speciality-description">
                Simply browse through our list of expert trainers, book your classes hassle-free.
            </p>
            <div className="speciality-grid">
                {specialityData.map((item, index) => (
                    <Link 
                        onClick={() => scrollTo(0,0)} 
                        key={index} 
                        to={`/SpecialityMenu/${item.speciality}`} 
                        className="speciality-item"
                    >
                        <div className="image-container">
                            <img
                                src={item.image}
                                alt={item.speciality}
                                className="speciality-image"
                            />
                        </div>
                        <p className="speciality-name">{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu


