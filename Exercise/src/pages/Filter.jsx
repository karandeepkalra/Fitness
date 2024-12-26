// import React from 'react'
// import { useParams } from 'react-router-dom'
// import './filter.css'
// import SpecialityCard from './SpecialityCard'

// import Tutor3 from '../assets/Sp2.jpeg'
// import Tutor4 from '../assets/Sp4.jpeg'
// import Tutor5 from '../assets/Sp7.jpeg'
// import Tutor6 from '../assets/Sp6.jpeg'
// import Tutor7 from '../assets/Sp8.jpeg'
// import Tutor8 from '../assets/Sp1.jpeg'

// const Filter = () => {

//   const data=[
//     {
//         _id:'tutor3',
//         name:'James',
//         image:Tutor3,
//         speciality:'Clinical Exercise ',
//         experience:'3.5years',
//         fees:'70',
//         about:'I specialize in **Clinical Exercise**, focusing on creating personalized exercise programs to help individuals manage chronic conditions, recover from injuries, and enhance their overall health. With **3.5 years of experience**, I use evidence-based approaches tailored to each person’s unique needs.'
//     },
//     {
//         _id:'tutor4',
//         name:'Olivia',
//         image:Tutor4,
//         speciality:'Neurological Rehabilitation',
//         experience:'7 years',
//         fees:'150',
//         about:'I am **Olivia**, a specialist in **Neurological Rehabilitation**, dedicated to helping individuals recover from neurological conditions and improve their quality of life. With **7 years of experience**, I provide tailored therapies designed to restore function and promote independence.'
//     },
//     {
//         _id:'tutor5',
//         name:'Samuel',
//         image:Tutor5,
//         speciality:'Aquatic Therapy ',
//         experience:'5 years',
//         fees:'100',
//         about:'I am **Samuel**, an expert in **Aquatic Therapy**, using water-based techniques to help individuals recover strength and mobility in a supportive environment. With **5 years of experience**, I specialize in creating customized therapy plans that promote healing and overall well-being.'
//     },
//     {
//         _id:'tutor6',
//         name:'Riley',
//         image:Tutor6,
//         speciality:'Geriatric Exercise',
//         experience:'1 years',
//         fees:'30',
//         about:'As a specialist in Geriatric Exercise, I focus on promoting health and mobility for older adults. With 1 year of experience, I am passionate about designing gentle yet effective programs to improve strength, flexibility, and balance at an affordable fee of $30.'
//     },
//     {
//         _id:'tutor7',
//         name:'Morgan',
//         image:Tutor7,
//         speciality:'Sports Therapy',
//         experience:'4 years',
//         fees:'50',
//         about:'I am a Sports Therapist dedicated to helping athletes recover from injuries and enhance their performance. With 4 years of experience, I provide tailored treatments to optimize physical health and ensure clients can get back in the game. My fee is $50.'
//     },
//     {
//         _id:'tutor8',
//         name:'Jerry',
//         image:Tutor8,
//         speciality:'Occupational Therapy',
//         experience:'20 years',
//         fees:'350',
//         about:'I am a seasoned Occupational Therapist with 20 years of experience in helping individuals regain independence in daily activities. My expertise spans across various conditions, and I offer personalized solutions to empower my clients. My fee is $350.'
//     },
// ];
//   const { speciality } = useParams()

//   // Filter the tutors based on the speciality
//   const filteredTutors = data.filter(tutor => 
//     tutor.speciality.trim() === speciality.trim()
//   )

//   return (
//     <div className='filtpage'>
//       <h2 className='speciality-title'>
//         {speciality} Specialists
//       </h2>
//       <div className='tutor-grid'>
//         {filteredTutors.length > 0 ? (
//           filteredTutors.map(tutor => (
//             <SpecialityCard key={tutor._id} tutor={tutor} />
//           ))
//         ) : (
//           <p>No specialists found for this speciality.</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Filter



import React from 'react';
import { useParams } from 'react-router-dom';
import './filter.css';
import SpecialityCard from './SpecialityCard';

import Tutor3 from '../assets/Sp2.jpeg';
import Tutor4 from '../assets/Sp4.jpeg';
import Tutor5 from '../assets/Sp7.jpeg';
import Tutor6 from '../assets/Sp6.jpeg';
import Tutor7 from '../assets/Sp8.jpeg';
import Tutor8 from '../assets/Sp1.jpeg';

const Filter = () => {
  const data = [
    {
      _id: 'tutor3',
      name: 'James',
      image: Tutor3,
      speciality: 'Clinical Exercise',
      experience: '3.5years',
      fees: '70',
      about: 'I specialize in **Clinical Exercise**, focusing on creating personalized exercise programs to help individuals manage chronic conditions, recover from injuries, and enhance their overall health. With **3.5 years of experience**, I use evidence-based approaches tailored to each person\'s unique needs.'
    },
    {
      _id: 'tutor4',
      name: 'Olivia',
      image: Tutor4,
      speciality: 'Neurological Rehabilitation',
      experience: '7 years',
      fees: '150',
      about: 'I am **Olivia**, a specialist in **Neurological Rehabilitation**, dedicated to helping individuals recover from neurological conditions and improve their quality of life. With **7 years of experience**, I provide tailored therapies designed to restore function and promote independence.'
    },
    {
      _id: 'tutor5',
      name: 'Samuel',
      image: Tutor5,
      speciality: 'Aquatic Therapy',
      experience: '5 years',
      fees: '100',
      about: 'I am **Samuel**, an expert in **Aquatic Therapy**, using water-based techniques to help individuals recover strength and mobility in a supportive environment. With **5 years of experience**, I specialize in creating customized therapy plans that promote healing and overall well-being.'
    },
    {
      _id: 'tutor6',
      name: 'Riley',
      image: Tutor6,
      speciality: 'Geriatric Exercise',
      experience: '1 years',
      fees: '30',
      about: 'As a specialist in Geriatric Exercise, I focus on promoting health and mobility for older adults. With 1 year of experience, I am passionate about designing gentle yet effective programs to improve strength, flexibility, and balance at an affordable fee of $30.'
    },
    {
      _id: 'tutor7',
      name: 'Morgan',
      image: Tutor7,
      speciality: 'Sports Therapy',
      experience: '4 years',
      fees: '50',
      about: 'I am a Sports Therapist dedicated to helping athletes recover from injuries and enhance their performance. With 4 years of experience, I provide tailored treatments to optimize physical health and ensure clients can get back in the game. My fee is $50.'
    },
    {
      _id: 'tutor8',
      name: 'Jerry',
      image: Tutor8,
      speciality: 'Occupational Therapy',
      experience: '20 years',
      fees: '350',
      about: 'I am a seasoned Occupational Therapist with 20 years of experience in helping individuals regain independence in daily activities. My expertise spans across various conditions, and I offer personalized solutions to empower my clients. My fee is $350.'
    },
  ];

  const { speciality } = useParams();

  const filteredTutors = data.filter(tutor => 
    tutor.speciality.toLowerCase().trim() === decodeURIComponent(speciality).toLowerCase().trim()
  );

  return (
    <div className='filtpage'>
      <h2 className='speciality-title'>
        {decodeURIComponent(speciality)} Specialists
      </h2>
      <div className='tutor-grid'>
        {filteredTutors.length > 0 ? (
          filteredTutors.map(tutor => (
            <SpecialityCard key={tutor._id} tutor={tutor} />
          ))
        ) : (
          <p>No specialists found for {decodeURIComponent(speciality)}.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;