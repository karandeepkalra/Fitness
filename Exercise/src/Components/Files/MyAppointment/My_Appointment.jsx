import React, { useContext } from "react";
import { AContext } from "../Context/AppContext";
import './My_Appointment.css';

const My_Appointment = () => {
  const { data } = useContext(AContext);

  return (
    <div className="appointments-container">
      <h1 className="appointments-title">My Appointments</h1>
      
      <div className="appointments-grid">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="appointment-card">
            <div className="appointment-image-container">
              <img src={item.image} alt="appointment" className="appointment-image" />
            </div>
            
            <div className="appointment-details">
              <h2 className="appointment-name">{item.name}</h2>
              <p className="appointment-speciality">{item.speciality}</p>
              <div className="appointment-datetime">
                <span>Date & Time:</span>
                <p>Pending</p>
              </div>
              
              <div className="appointment-actions">
                <button className="btn-pay">Pay Online</button>
                <button className="btn-cancel">Cancel Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Appointment;