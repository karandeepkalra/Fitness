import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AContext } from "../Context/AppContext";
import './Appointment.css';
import {useNavigate} from 'react-router-dom'

const Appointment = () => {
  const navigate=useNavigate();
   const { TutorId } = useParams();
   const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
   const { data, currencySymbol } = useContext(AContext);
   const [info, setInfo] = useState(null);
   const [slots, setSlots] = useState([]);
   const [selectedDayIndex, setSelectedDayIndex] = useState(null);
   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
   const [timeSlots, setTimeSlots] = useState([]);

   useEffect(() => {
     const fetchTutorInfo = () => {
       if (data && TutorId) {
         const TutorInfo = data.find((tut) => tut._id === TutorId);
         setInfo(TutorInfo);
       }
     };
     fetchTutorInfo();
   }, [TutorId, data]);

   useEffect(() => {
     const getAvailableSlots = () => {
       setSlots([]);
       let today = new Date();
       for (let i = 0; i < 7; i++) {
         let currDate = new Date(today);
         currDate.setDate(today.getDate() + i);
         
         let endTime = new Date();
         endTime.setDate(today.getDate() + i);
         endTime.setHours(21, 0, 0, 0);
         
         let dayTimeSlots = [];
         
         if (today.getDate() === currDate.getDate()) {
           currDate.setHours(Math.max(today.getHours(), 10));
           currDate.setMinutes(0);
         } else {
           currDate.setHours(10);
           currDate.setMinutes(0);
         }
         
         while (currDate < endTime) {
           let slotDateTime = new Date(currDate);
           if (slotDateTime > today) {
             let formattedTime = slotDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
             dayTimeSlots.push({
               datetime: slotDateTime,
               time: formattedTime,
               isAvailable: true
             });
           }
           currDate.setHours(currDate.getHours() + 3);
         }
         
         if (dayTimeSlots.length > 0) {
           setSlots((prev) => [...prev, dayTimeSlots]);
         }
       }
     };
     
     if (info) {
       getAvailableSlots();
     }
   }, [info]);

   const handleDaySelect = (index) => {
     setSelectedDayIndex(index);
     setSelectedTimeSlot(null);
     setTimeSlots(slots[index] || []);
   };

   const handleTimeSlotSelect = (index) => {
     const selectedSlot = timeSlots[index];
     const now = new Date();
     if (selectedSlot.datetime > now) {
       setSelectedTimeSlot(index);
     } else {
       alert("Cannot select a time slot in the past.");
     }
   };

   if (!info) {
     return <div>Loading...</div>;
   }

   return (
     <div className="containers">
       <div className="user-card">
         <div className="card-header">
           <div className="card-image-container">
             <img src={info.image} alt={info.name} />
           </div>
         </div>
         <div className="card-content">
           <h2 className="name">{info.name}</h2>
           <p className="role">{info.role}</p>
           <div className="details">
             <div className="detail-item">
               <span className="detail-label">Experience</span>
               {info.experience} Years
             </div>
           </div>
           <p className="about">{info.about}</p>
           <p className="fees">Appointment fees: <span>{currencySymbol}{info.fees}</span></p>
         </div>
       </div>
       
       <div className="slots">
         <p>Booking Slots</p>
         <div className="slots-content">
           {slots.length && slots.map((item, index) => (
             <div 
               key={index} 
               className={selectedDayIndex === index ? 'selected' : ''}
               onClick={() => handleDaySelect(index)}
             >
               <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
               <p>{item[0] && item[0].datetime.getDate()}</p>
             </div>
           ))}
         </div>
         
         {selectedDayIndex !== null && (
           <div className="time-slots">
             <p>Available Time Slots</p>
             <div className="time-slots-content">
               {timeSlots.map((slot, index) => (
                 <div 
                   key={index} 
                   className={`time-slot ${selectedTimeSlot === index ? 'selected' : ''}`}
                   onClick={() => handleTimeSlotSelect(index)}
                 >
                   {slot.time}
                 </div>
               ))}
             </div>
           </div>
         )}
         <button 
           className={selectedTimeSlot !== null ? 'active' : ''}
           disabled={selectedTimeSlot === null}
         >
           Book My Appointment
         </button>
       </div>
       <button onClick={()=>
        navigate("/MyAppointment")
       } />
     </div>
   );
};

export default Appointment;
