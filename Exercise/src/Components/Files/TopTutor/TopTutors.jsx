import React, { useContext } from 'react'
import { AContext } from '../Context/AppContext'
import './TopTutors.css'
import {useNavigate} from 'react-router-dom'

const TopTutors = () => {
  const navigate=useNavigate();
  const {data}=useContext(AContext)
   return (
     <div className="container">
         <h1>Top Tutors to Book</h1>
         <p>Simply browse through our Extensive list of trusted Tutors.</p>
         <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
             {data.slice(0, 8).map((item) => (
               <div onClick={()=>navigate(`Appointment/${item._id}`)} key={item._id} className="items">
                 <div className="content">
                   <div style={{position: 'relative'}}>
                     <img src={item.image} alt={item.name} />
                     <div className="status">
                       <p>Available</p>
                     </div>
                   </div>
                   <h2>{item.name}</h2>
                   <p>{item.speciality}</p>
                 </div>
               </div>
             ))}
         </div>
         <button className='btn1' onClick={()=>{navigate('/Tutors')}}>more</button>
     </div>
   )
}

export default TopTutors