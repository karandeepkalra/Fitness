
import React, { useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Dashboard.css";

const EarningsIcon = () => (
  <div className="stat-icon icon-earnings">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  </div>
);

const AppointmentsIcon = () => (
  <div className="stat-icon icon-appointments">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  </div>
);

const PatientsIcon = () => (
  <div className="stat-icon icon-patients">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  </div>
);

const Dashboard = () => {
  const { token, dashData, getDashData } = useContext(AppContext);

  useEffect(() => {
    if (token) {
      getDashData();
    }
  }, [token]);

  if (!dashData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Stats Grid */}
      <div className="stats-grid">
        {/* Keep your existing stats cards */}
        <div className="stat-card">
          <EarningsIcon />
          <div className="stat-content">
            <p className="stat-value">${dashData.earnings}</p>
            <p className="stat-label">Earnings</p>
          </div>
        </div>

        <div className="stat-card">
          <AppointmentsIcon />
          <div className="stat-content">
            <p className="stat-value">{dashData.appointments}</p>
            <p className="stat-label">Appointments</p>
          </div>
        </div>

        <div className="stat-card">
          <PatientsIcon />
          <div className="stat-content">
            <p className="stat-value">{dashData.patients}</p>
            <p className="stat-label">Patients</p>
          </div>
        </div>
      </div>

      {/* Latest Bookings section */}
      <div className="bookings-card">
        <div className="bookings-header">
          <h2 className="bookings-title">Latest Bookings</h2>
        </div>

        <div className="bookings-list">
          {dashData.latestAppointments.map((item, index) => (
            <div key={index} className="booking-item">
              <div className="booking-content">
                <div className="booking-info">
                  <div className="user-info">
                    <div className="names-container">
                      <p className="doctor-name">Dr. {item.tutorData?.name || "Unknown"}</p>
                      <p className="patient-name">{item.userData?.name || "N/A"}</p>
                    </div>
                  </div>
                  <div className="appointment-details">
                    <p className="booking-datetime">
                      {item.bookingDateTime ? new Date(item.bookingDateTime).toLocaleString() : "N/A"}
                    </p>
                    <p className={`payment-status ${item.paymentStatus.toLowerCase()}`}>
                      {item.paymentStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;