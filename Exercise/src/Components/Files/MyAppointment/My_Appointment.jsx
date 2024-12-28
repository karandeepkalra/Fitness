import React, { useContext, useEffect, useState } from "react";
import { AContext } from "../Context/AppContext";
import './My_Appointment.css';
import axios from "axios";
import { toast } from "react-toastify";

const My_Appointment = () => {
  const { backendURL, token } = useContext(AContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserAppointments = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const { data } = await axios.get(`${backendURL}/user/appointments`, config);
      
      if (data.success) {
        setAppointments(data.appointments);
        console.log("Fetched appointments:", data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token, backendURL]);

  if (loading) {
    return <div className="loading">Loading appointments...</div>;
  }

  return (
    <div className="appointments-container">
      <h1 className="appointments-title">My Appointments</h1>
      
      {appointments.length === 0 ? (
        <div className="no-appointments">
          <p>No appointments found</p>
        </div>
      ) : (
        <div className="appointments-grid">
          {appointments.map((item, index) => (
            <div key={item._id || index} className="appointment-card">
              <div className="appointment-image-container">
                <img 
                  src={item.tutData?.image || '/default-tutor-image.png'} 
                  alt="tutor" 
                  className="appointment-image" 
                />
              </div>
              
              <div className="appointment-details">
                <h2 className="appointment-name">{item.tutData?.name}</h2>
                <p className="appointment-speciality">{item.tutData?.speciality}</p>
                <div className="appointment-datetime">
                  <p>Address:</p>
                  <p>{item.tutData?.address?.line1}</p>
                  <p>{item.tutData?.address?.line2}</p>
                  <p>
                    <span>Date & Time: </span>
                    {item.slotDate} | {item.slotTime}
                  </p>
                </div>
                
                <div className="appointment-actions">
                  <button className="btn-pay">Pay Online</button>
                  <button className="btn-cancel">Cancel Appointment</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default My_Appointment;







