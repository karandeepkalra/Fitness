// // import React, { useContext, useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { AContext } from "../Context/AppContext";
// // import './Appointment.css';
// // import {useNavigate} from 'react-router-dom'

// // const Appointment = () => {
// //   const navigate=useNavigate();
// //    const { TutorId } = useParams();
// //    const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// //    const { data, currencySymbol } = useContext(AContext);
// //    const [info, setInfo] = useState(null);
// //    const [slots, setSlots] = useState([]);
// //    const [selectedDayIndex, setSelectedDayIndex] = useState(null);
// //    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
// //    const [timeSlots, setTimeSlots] = useState([]);


// //    console.log("hello")
// //    useEffect(() => {
// //      const fetchTutorInfo = () => {
// //        if (data && TutorId) {
// //          const TutorInfo = data.find((tut) => tut._id === TutorId);
// //          setInfo(TutorInfo);
// //        }
// //      };
// //      fetchTutorInfo();
// //    }, [TutorId, data]);
// //    console.log("hello")
// //    useEffect(() => {
// //      const getAvailableSlots = () => {
// //        setSlots([]);
// //        let today = new Date();
// //        for (let i = 0; i < 7; i++) {
// //          let currDate = new Date(today);
// //          currDate.setDate(today.getDate() + i);
         
// //          let endTime = new Date();
// //          endTime.setDate(today.getDate() + i);
// //          endTime.setHours(21, 0, 0, 0);
         
// //          let dayTimeSlots = [];
         
// //          if (today.getDate() === currDate.getDate()) {
// //            currDate.setHours(Math.max(today.getHours(), 10));
// //            currDate.setMinutes(0);
// //          } else {
// //            currDate.setHours(10);
// //            currDate.setMinutes(0);
// //          }
// //          console.log("hellssssssso")
         
// //          while (currDate < endTime) {
// //            let slotDateTime = new Date(currDate);
// //            if (slotDateTime > today) {
// //              let formattedTime = slotDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// //              dayTimeSlots.push({
// //                datetime: slotDateTime,
// //                time: formattedTime,
// //                isAvailable: true
// //              });
// //            }
// //            currDate.setHours(currDate.getHours() + 3);
// //          }
         
// //          if (dayTimeSlots.length > 0) {
// //            setSlots((prev) => [...prev, dayTimeSlots]);
// //          }
// //        }
// //      };
     
// //      if (info) {
// //        getAvailableSlots();
// //      }
// //    }, [info]);

// //    const handleDaySelect = (index) => {
// //      setSelectedDayIndex(index);
// //      setSelectedTimeSlot(null);
// //      setTimeSlots(slots[index] || []);
// //    };

// //    const handleTimeSlotSelect = (index) => {
// //      const selectedSlot = timeSlots[index];
// //      const now = new Date();
// //      if (selectedSlot.datetime > now) {
// //        setSelectedTimeSlot(index);
// //      } else {
// //        alert("Cannot select a time slot in the past.");
// //      }
// //    };

// //    if (!info) {
// //      return <div>Loading...</div>;
// //    }

// //    return (
// //      <div className="containers">
// //        <div className="user-card">
// //          <div className="card-header">
// //            <div className="card-image-container">
// //              <img src={info.image} alt={info.name} />
// //            </div>
// //          </div>
// //          <div className="card-content">
// //            <h2 className="name">{info.name}</h2>
// //            <p className="role">{info.role}</p>
// //            <div className="details">
// //              <div className="detail-item">
// //                <span className="detail-label">Experience</span>
// //                {info.experience} Years
// //              </div>
// //            </div>
// //            <p className="about">{info.about}</p>
// //            <p className="fees">Appointment fees: <span>{currencySymbol}{info.fees}</span></p>
// //          </div>
// //        </div>
       
// //        <div className="slots">
// //          <p>Booking Slots</p>
// //          <div className="slots-content">
// //            {slots.length && slots.map((item, index) => (
// //              <div 
// //                key={index} 
// //                className={selectedDayIndex === index ? 'selected' : ''}
// //                onClick={() => handleDaySelect(index)}
// //              >
// //                <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
// //                <p>{item[0] && item[0].datetime.getDate()}</p>
// //              </div>
// //            ))}
// //          </div>
         
// //          {selectedDayIndex !== null && (
// //            <div className="time-slots">
// //              <p>Available Time Slots</p>
// //              <div className="time-slots-content">
// //                {timeSlots.map((slot, index) => (
// //                  <div 
// //                    key={index} 
// //                    className={`time-slot ${selectedTimeSlot === index ? 'selected' : ''}`}
// //                    onClick={() => handleTimeSlotSelect(index)}
// //                  >
// //                    {slot.time}
// //                  </div>
// //                ))}
// //              </div>
// //            </div>
// //          )}
// //          <button 
// //            className={selectedTimeSlot !== null ? 'active' : ''}
// //            disabled={selectedTimeSlot === null}
// //          >
// //            Book My Appointment
// //          </button>
// //        </div>
// //        <button onClick={()=>
// //         navigate("/MyAppointment")
// //        } />
// //      </div>
// //    );
// // };

// // export default Appointment;




// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AContext } from "../Context/AppContext";
// import './Appointment.css';
// import { useNavigate } from 'react-router-dom';

// const Appointment = () => {
//   const navigate = useNavigate();
//   const { TutorId } = useParams();
//   const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   const { tutorsData, currencySymbol } = useContext(AContext); // Use tutorsData from context
//   const [info, setInfo] = useState(null);
//   const [slots, setSlots] = useState([]);
//   const [selectedDayIndex, setSelectedDayIndex] = useState(null);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [timeSlots, setTimeSlots] = useState([]);

//   console.log("hello");

//   useEffect(() => {
//     console.log("useEffect - fetching tutor info");

//     const fetchTutorInfo = () => {
//       console.log("TutorId:", TutorId); // Check TutorId from URL
//       console.log("Tutors Data:", tutorsData); // Log tutorsData to verify structure
//       const TutorInfo = tutorsData.find((tut) => tut._id === TutorId);
//       console.log("Found Tutor Info:", TutorInfo); // Log the tutor info found
//       setInfo(TutorInfo);
//     };

//     if (TutorId && tutorsData) {
//       fetchTutorInfo();
//     }
//   }, [TutorId, tutorsData]); // Use tutorsData here instead of data

//   useEffect(() => {
//     console.log("useEffect - fetching available slots");
//     const getAvailableSlots = () => {
//       setSlots([]);
//       let today = new Date();
//       for (let i = 0; i < 7; i++) {
//         let currDate = new Date(today);
//         currDate.setDate(today.getDate() + i);

//         let endTime = new Date();
//         endTime.setDate(today.getDate() + i);
//         endTime.setHours(21, 0, 0, 0);

//         let dayTimeSlots = [];

//         if (today.getDate() === currDate.getDate()) {
//           currDate.setHours(Math.max(today.getHours(), 10));
//           currDate.setMinutes(0);
//         } else {
//           currDate.setHours(10);
//           currDate.setMinutes(0);
//         }

//         while (currDate < endTime) {
//           let slotDateTime = new Date(currDate);
//           if (slotDateTime > today) {
//             let formattedTime = slotDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//             dayTimeSlots.push({
//               datetime: slotDateTime,
//               time: formattedTime,
//               isAvailable: true
//             });
//           }
//           currDate.setHours(currDate.getHours() + 3);
//         }

//         if (dayTimeSlots.length > 0) {
//           setSlots((prev) => [...prev, dayTimeSlots]);
//         }
//       }
//     };

//     if (info) {
//       getAvailableSlots();
//     }
//   }, [info]);

//   if (!info) {
//     console.log("No tutor info available yet");
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="containers">
//       <div className="user-card">
//         <div className="card-header">
//           <div className="card-image-container">
//             <img src={info.image} alt={info.name} />
//           </div>
//         </div>
//         <div className="card-content">
//           <h2 className="name">{info.name}</h2>
//           <p className="role">{info.role}</p>
//           <div className="details">
//             <div className="detail-item">
//               <span className="detail-label">Experience</span>
//               {info.experience} Years
//             </div>
//           </div>
//           <p className="about">{info.about}</p>
//           <p className="fees">Appointment fees: <span>{currencySymbol}{info.fees}</span></p>
//         </div>
//       </div>

//       <div className="slots">
//         <p>Booking Slots</p>
//         <div className="slots-content">
//           {slots.length && slots.map((item, index) => (
//             <div
//               key={index}
//               className={selectedDayIndex === index ? 'selected' : ''}
//               onClick={() => handleDaySelect(index)}
//             >
//               <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
//               <p>{item[0] && item[0].datetime.getDate()}</p>
//             </div>
//           ))}
//         </div>

//         {selectedDayIndex !== null && (
//           <div className="time-slots">
//             <p>Available Time Slots</p>
//             <div className="time-slots-content">
//               {timeSlots.map((slot, index) => (
//                 <div
//                   key={index}
//                   className={`time-slot ${selectedTimeSlot === index ? 'selected' : ''}`}
//                   onClick={() => handleTimeSlotSelect(index)}
//                 >
//                   {slot.time}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         <button
//           className={selectedTimeSlot !== null ? 'active' : ''}
//           disabled={selectedTimeSlot === null}
//         >
//           Book My Appointment
//         </button>
//       </div>
//       <button onClick={() => navigate("/MyAppointment")} />
//     </div>
//   );
// };

// export default Appointment;


// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AContext } from "../Context/AppContext";
// import './Appointment.css';
// import { useNavigate } from 'react-router-dom';

// const Appointment = () => {
//   const navigate = useNavigate();
//   const { TutorId } = useParams();
//   const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   const { tutorsData, currencySymbol } = useContext(AContext); // Use tutorsData from context
//   const [info, setInfo] = useState(null);
//   const [slots, setSlots] = useState([]);
//   const [selectedDayIndex, setSelectedDayIndex] = useState(null);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [timeSlots, setTimeSlots] = useState([]);

//   console.log("hello");

//   useEffect(() => {
//     console.log("useEffect - fetching tutor info");

//     const fetchTutorInfo = () => {
//       console.log("TutorId:", TutorId); // Check TutorId from URL
//       console.log("Tutors Data:", tutorsData); // Log tutorsData to verify structure
//       const TutorInfo = tutorsData.find((tut) => tut._id === TutorId);
//       console.log("Found Tutor Info:", TutorInfo); // Log the tutor info found
//       setInfo(TutorInfo);
//     };

//     if (TutorId && tutorsData) {
//       fetchTutorInfo();
//     }
//   }, [TutorId, tutorsData]); // Use tutorsData here instead of data

//   useEffect(() => {
//     console.log("useEffect - fetching available slots");
//     const getAvailableSlots = () => {
//       setSlots([]); // Reset slots
//       let today = new Date();
//       for (let i = 0; i < 7; i++) {
//         let currDate = new Date(today);
//         currDate.setDate(today.getDate() + i);

//         let endTime = new Date();
//         endTime.setDate(today.getDate() + i);
//         endTime.setHours(21, 0, 0, 0);

//         let dayTimeSlots = [];

//         if (today.getDate() === currDate.getDate()) {
//           currDate.setHours(Math.max(today.getHours(), 10));
//           currDate.setMinutes(0);
//         } else {
//           currDate.setHours(10);
//           currDate.setMinutes(0);
//         }

//         while (currDate < endTime) {
//           let slotDateTime = new Date(currDate);
//           if (slotDateTime > today) {
//             let formattedTime = slotDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//             dayTimeSlots.push({
//               datetime: slotDateTime,
//               time: formattedTime,
//               isAvailable: true
//             });
//           }
//           currDate.setHours(currDate.getHours() + 3); // Increment by 3 hours
//         }

//         if (dayTimeSlots.length > 0) {
//           setSlots((prev) => [...prev, dayTimeSlots]); // Add dayTimeSlots to slots
//         }
//       }
//     };

//     if (info) {
//       getAvailableSlots();
//     }
//   }, [info]); // Fetch slots when tutor info is available

//   // Handle day selection and update the available time slots for the selected day
//   const handleDaySelect = (index) => {
//     setSelectedDayIndex(index); // Set the selected day index
//     setSelectedTimeSlot(null); // Reset selected time slot
//     setTimeSlots(slots[index] || []); // Set the time slots for the selected day
//   };

//   // Handle time slot selection
//   const handleTimeSlotSelect = (index) => {
//     const selectedSlot = timeSlots[index];
//     const now = new Date();
//     if (selectedSlot.datetime > now) {
//       setSelectedTimeSlot(index); // Set the selected time slot
//     } else {
//       alert("Cannot select a time slot in the past.");
//     }
//   };

//   // If no tutor info is available, show loading
//   if (!info) {
//     console.log("No tutor info available yet");
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="containers">
//       {/* Tutor Info */}
//       <div className="user-card">
//         <div className="card-header">
//           <div className="card-image-container">
//             <img src={info.image} alt={info.name} />
//           </div>
//         </div>
//         <div className="card-content">
//           <h2 className="name">{info.name}</h2>
//           <p className="role">{info.role}</p>
//           <div className="details">
//             <div className="detail-item">
//               <span className="detail-label">Experience</span>
//               {info.experience} Years
//             </div>
//           </div>
//           <p className="about">{info.about}</p>
//           <p className="fees">Appointment fees: <span>{currencySymbol}{info.fees}</span></p>
//         </div>
//       </div>

//       {/* Day Selection */}
//       <div className="slots">
//         <p>Booking Slots</p>
//         <div className="slots-content">
//           {slots.length > 0 &&
//             slots.map((item, index) => (
//               <div
//                 key={index}
//                 className={selectedDayIndex === index ? 'selected' : ''}
//                 onClick={() => handleDaySelect(index)} // Select day
//               >
//                 <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
//                 <p>{item[0] && item[0].datetime.getDate()}</p>
//               </div>
//             ))}
//         </div>

//         {/* Time Slot Selection */}
//         {selectedDayIndex !== null && (
//           <div className="time-slots">
//             <p>Available Time Slots</p>
//             <div className="time-slots-content">
//               {timeSlots.map((slot, index) => (
//                 <div
//                   key={index}
//                   className={`time-slot ${selectedTimeSlot === index ? 'selected' : ''}`}
//                   onClick={() => handleTimeSlotSelect(index)} // Select time slot
//                 >
//                   {slot.time}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Book Appointment Button */}
//         <button
//           className={selectedTimeSlot !== null ? 'active' : ''}
//           disabled={selectedTimeSlot === null} // Disable if no time slot is selected
//         >
//           Book My Appointment
//         </button>
//       </div>

//       {/* Back to My Appointment Page */}
//       <button onClick={() => navigate("/MyAppointment")}>Back to Appointments</button>
//     </div>
//   );
// };

// export default Appointment;



// correct working code
// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AContext } from "../Context/AppContext";
// import './Appointment.css';
// import { useNavigate } from 'react-router-dom';

// const Appointment = () => {
//   const navigate = useNavigate();
//   const { TutorId } = useParams();
//   const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   const { tutorsData, currencySymbol } = useContext(AContext); // Use tutorsData from context
//   const [info, setInfo] = useState(null);
//   const [slots, setSlots] = useState([]);
//   const [selectedDayIndex, setSelectedDayIndex] = useState(null);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [timeSlots, setTimeSlots] = useState([]);

//   console.log("hello");

//   useEffect(() => {
//     console.log("useEffect - fetching tutor info");

//     const fetchTutorInfo = () => {
//       console.log("TutorId:", TutorId); // Check TutorId from URL
//       console.log("Tutors Data:", tutorsData); // Log tutorsData to verify structure
//       const TutorInfo = tutorsData.find((tut) => tut._id === TutorId);
//       console.log("Found Tutor Info:", TutorInfo); // Log the tutor info found
//       setInfo(TutorInfo);
//     };

//     if (TutorId && tutorsData) {
//       fetchTutorInfo();
//     }
//   }, [TutorId, tutorsData]); // Use tutorsData here instead of data

//   useEffect(() => {
//     console.log("useEffect - fetching available slots");
//     const getAvailableSlots = () => {
//       setSlots([]); // Reset slots
//       let today = new Date();
//       for (let i = 0; i < 7; i++) {
//         let currDate = new Date(today);
//         currDate.setDate(today.getDate() + i);

//         let endTime = new Date();
//         endTime.setDate(today.getDate() + i);
//         endTime.setHours(21, 0, 0, 0);

//         let dayTimeSlots = [];

//         if (today.getDate() === currDate.getDate()) {
//           currDate.setHours(Math.max(today.getHours(), 10));
//           currDate.setMinutes(0);
//         } else {
//           currDate.setHours(10);
//           currDate.setMinutes(0);
//         }

//         while (currDate < endTime) {
//           let slotDateTime = new Date(currDate);
//           if (slotDateTime > today) {
//             let formattedTime = slotDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//             dayTimeSlots.push({
//               datetime: slotDateTime,
//               time: formattedTime,
//               isAvailable: true
//             });
//           }
//           currDate.setHours(currDate.getHours() + 3); // Increment by 3 hours
//         }

//         if (dayTimeSlots.length > 0) {
//           setSlots((prev) => [...prev, dayTimeSlots]); // Add dayTimeSlots to slots
//         }
//       }
//     };

//     if (info) {
//       getAvailableSlots();
//     }
//   }, [info]); // Fetch slots when tutor info is available

//   // Handle day selection and update the available time slots for the selected day
//   const handleDaySelect = (index) => {
//     setSelectedDayIndex(index); // Set the selected day index
//     setSelectedTimeSlot(null); // Reset selected time slot
//     setTimeSlots(slots[index] || []); // Set the time slots for the selected day
//   };

//   // Handle time slot selection
//   const handleTimeSlotSelect = (index) => {
//     const selectedSlot = timeSlots[index];
//     const now = new Date();
//     if (selectedSlot.datetime > now) {
//       setSelectedTimeSlot(index); // Set the selected time slot
//     } else {
//       alert("Cannot select a time slot in the past.");
//     }
//   };

//   // If no tutor info is available, show loading
//   if (!info) {
//     console.log("No tutor info available yet");
//     return <div>Loading...</div>;
//   }

//   // Handle booking appointment
//   const handleBooking = () => {
//     if (selectedTimeSlot !== null) {
//       // Here you can implement the logic to book the appointment (e.g., call an API)
//       alert(`Appointment booked for ${timeSlots[selectedTimeSlot].time} on ${daysofweek[selectedDayIndex]}`);
//       // Redirect to the "My Appointments" page
//       navigate("/MyAppointment");
//     }
//   };

//   return (
//     <div className="containers">
//       {/* Tutor Info */}
//       <div className="user-card">
//         <div className="card-header">
//           <div className="card-image-container">
//             <img src={info.image} alt={info.name} />
//           </div>
//         </div>
//         <div className="card-content">
//           <h2 className="name">{info.name}</h2>
//           <p className="role">{info.role}</p>
//           <div className="details">
//             <div className="detail-item">
//               <span className="detail-label">Experience</span>
//               {info.experience} Years
//             </div>
//           </div>
//           <p className="about">{info.about}</p>
//           <p className="fees">Appointment fees: <span>{currencySymbol}{info.fees}</span></p>
//         </div>
//       </div>

//       {/* Day Selection */}
//       <div className="slots">
//         <p>Booking Slots</p>
//         <div className="slots-content">
//           {slots.length > 0 &&
//             slots.map((item, index) => (
//               <div
//                 key={index}
//                 className={selectedDayIndex === index ? 'selected' : ''}
//                 onClick={() => handleDaySelect(index)} // Select day
//               >
//                 <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
//                 <p>{item[0] && item[0].datetime.getDate()}</p>
//               </div>
//             ))}
//         </div>

//         {/* Time Slot Selection */}
//         {selectedDayIndex !== null && (
//           <div className="time-slots">
//             <p>Available Time Slots</p>
//             <div className="time-slots-content">
//               {timeSlots.map((slot, index) => (
//                 <div
//                   key={index}
//                   className={`time-slot ${selectedTimeSlot === index ? 'selected' : ''}`}
//                   onClick={() => handleTimeSlotSelect(index)} // Select time slot
//                 >
//                   {slot.time}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Book Appointment Button */}
//         <button
//           className={selectedTimeSlot !== null ? 'active' : 'inactive'}
//           disabled={selectedTimeSlot === null} // Disable if no time slot is selected
//           onClick={handleBooking} // Trigger booking
//         >
//           Book My Appointment
//         </button>
//       </div>

//       {/* Back to My Appointment Page */}
//     </div>
//   );
// };

// export default Appointment;




import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AContext } from "../Context/AppContext";
import './Appointment.css';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const navigate = useNavigate();
  const { TutorId } = useParams();
  const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const { tutors, currencySymbol } = useContext(AContext); // Use tutors from context
  const [info, setInfo] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  // Fetch tutor information from the context
  useEffect(() => {
    console.log("Fetching tutor info");

    const fetchTutorInfo = () => {
      const TutorInfo = tutors.find((tut) => tut._id === TutorId); // Match by ID
      console.log("Found Tutor Info:", TutorInfo);
      setInfo(TutorInfo);
    };

    if (TutorId && tutors.length > 0) {
      fetchTutorInfo();
    }
  }, [TutorId, tutors]);

  // Generate booking slots dynamically
  useEffect(() => {
    console.log("Fetching available slots");

    const getAvailableSlots = () => {
      setSlots([]); // Reset slots
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
              isAvailable: true,
            });
          }
          currDate.setHours(currDate.getHours() + 3); // Increment by 3 hours
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

  // Handle day selection
  const handleDaySelect = (index) => {
    setSelectedDayIndex(index);
    setSelectedTimeSlot(null); // Reset selected time slot
    setTimeSlots(slots[index] || []); // Set the time slots for the selected day
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (index) => {
    const selectedSlot = timeSlots[index];
    const now = new Date();
    if (selectedSlot.datetime > now) {
      setSelectedTimeSlot(index);
    } else {
      alert("Cannot select a time slot in the past.");
    }
  };

  // Handle booking appointment
  const handleBooking = () => {
    if (selectedTimeSlot !== null) {
      alert(`Appointment booked for ${timeSlots[selectedTimeSlot].time} on ${daysofweek[selectedDayIndex]}`);
      navigate("/MyAppointment");
    }
  };

  if (!info) {
    console.log("No tutor info available yet");
    return <div>Loading...</div>;
  }

  return (
    <div className="containers">
      {/* Tutor Info */}
      <div className="user-card">
        <div className="card-header">
          <div className="card-image-container">
            <img src={info.image} alt={info.name} />
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">{info.name}</h2>
          <p className="role">{info.speciality}</p>
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

      {/* Day Selection */}
      <div className="slots">
        <p>Booking Slots</p>
        <div className="slots-content">
          {slots.length > 0 &&
            slots.map((item, index) => (
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

        {/* Time Slot Selection */}
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

        {/* Book Appointment Button */}
        <button
          className={selectedTimeSlot !== null ? 'active' : 'inactive'}
          disabled={selectedTimeSlot === null}
          onClick={handleBooking}
        >
          Book My Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
