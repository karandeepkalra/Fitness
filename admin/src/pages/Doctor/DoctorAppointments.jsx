import React, { useContext, useEffect } from 'react';
import './DoctorAppointments.css';
import { AppContext } from '../../context/AppContext';

const DoctorAppointments = () => {
  const { token, appointments, getAppointments } = useContext(AppContext);

  useEffect(() => {
    if (token) {
      getAppointments();
    }
  }, [token]);

  const renderUserInfo = (userData) => {
    if (!userData?.name) return 'N/A';
    return (
      <div className="user-info">
        <span className="user-name">{userData.name}</span>
      </div>
    );
  };

  return (
    <div className="doctor-appointments">
      <h2 className="heading">All Appointments</h2>
      <div className="appointments-table">
        <div className="table-header">
          <p>#</p>
          <p>Patient Details</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Status</p>
        </div>
        <div className="table-body">
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <div key={appointment._id} className="table-row">
                <p>{index + 1}</p>
                <div>{renderUserInfo(appointment.userData)}</div>
                <p className={`payment-status ${appointment.payment ? 'paid' : 'pending'}`}>
                  {appointment.payment ? 'Paid' : 'Pending'}
                </p>
                <p>{appointment.userData?.age || 'N/A'} yrs</p>
                <p className="appointment-time">
                  <span className="date">{appointment.slotDate}</span>
                  <span className="time">{appointment.slotTime}</span>
                </p>
                <p className="fees">₹{appointment.amount}</p>
                <p className={`status ${appointment.cancelled ? 'cancelled' : 
                  appointment.isCompleted ? 'completed' : 'scheduled'}`}>
                  {appointment.cancelled ? 'Cancelled' : 
                   appointment.isCompleted ? 'Completed' : 'Scheduled'}
                </p>
              </div>
            ))
          ) : (
            <div className="no-appointments">
              <p>No appointments found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;