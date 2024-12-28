import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AContext } from "../Context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { CalendarDays, Clock, User, Briefcase, DollarSign } from "lucide-react";
import "./Appointment.css";

const Appointment = () => {
  const { TutorId } = useParams();
  const { tutors, backendURL, token, getTutorsData, currencySymbol } = useContext(AContext);
  const [info, setInfo] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState({});

  // Existing useEffect and handler functions remain the same
  useEffect(() => {
    const fetchTutorInfo = () => {
      const TutorInfo = tutors.find((tut) => tut._id === TutorId);
      setInfo(TutorInfo);
      setBookedSlots(TutorInfo?.slots_booked || {});
    };

    if (TutorId && tutors.length > 0) {
      fetchTutorInfo();
    }
  }, [TutorId, tutors]);

  useEffect(() => {
    const generateAvailableSlots = () => {
      const today = new Date();
      const newSlots = [];
      for (let i = 0; i < 7; i++) {
        const daySlots = [];
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateKey = date.toISOString().split("T")[0];

        for (let hour = 10; hour <= 20; hour += 3) {
          const slotTime = new Date(date);
          slotTime.setHours(hour, 0, 0);
          const timeString = slotTime.toLocaleTimeString([], { 
            hour: "2-digit", 
            minute: "2-digit" 
          });
          if (!bookedSlots[dateKey]?.includes(timeString)) {
            daySlots.push({ datetime: slotTime, time: timeString });
          }
        }
        newSlots.push(daySlots);
      }
      setSlots(newSlots);
    };

    if (info) {
      generateAvailableSlots();
    }
  }, [info, bookedSlots]);

  const handleDaySelect = (index) => {
    setSelectedDayIndex(index);
    setSelectedTimeSlot(null);
    setTimeSlots(slots[index] || []);
  };

  const handleTimeSlotSelect = (index) => {
    const now = new Date();
    const selectedSlot = timeSlots[index];
    if (selectedSlot.datetime > now) {
      setSelectedTimeSlot(index);
    } else {
      toast.warn("Cannot select a past time slot.");
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Please log in to book an appointment.");
      return;
    }

    if (selectedDayIndex === null || selectedTimeSlot === null) {
      toast.warn("Please select a day and time slot.");
      return;
    }

    try {
      const slot = timeSlots[selectedTimeSlot];
      const { datetime } = slot;
      const dateString = datetime.toISOString().split("T")[0];
      const timeString = datetime.toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit" 
      });

      const response = await axios.post(
        `${backendURL}/user/book-appointment`,
        { tutId: TutorId, slotDate: dateString, slotTime: timeString },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success("Appointment successfully booked!");
        getTutorsData();
        setBookedSlots((prev) => ({
          ...prev,
          [dateString]: [...(prev[dateString] || []), timeString],
        }));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to book the appointment. Please try again.");
    }
  };

  if (!info) {
    return <div className="loading-spinner"></div>;
  }

  const getDayLabel = (index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="appointment-container">
      <div className="appointment-grid">
        {/* Tutor Info Card */}
        <div className="card tutor-card">
          <div className="card-header">
            <div className="image-container">
              <img src={info.image} alt={info.name} className="tutor-image" />
            </div>
            <h2 className="tutor-name">{info.name}</h2>
          </div>
          <div className="card-content">
            <div className="info-item">
              <Briefcase className="icon" />
              <span>{info.speciality}</span>
            </div>
            <div className="info-item">
              <User className="icon" />
              <p>{info.about}</p>
            </div>
            <div className="info-item">
              <DollarSign className="icon" />
              <span className="fees">
                {currencySymbol}{info.fees}
              </span>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="card booking-card">
          <div className="card-header">
            <h2 className="section-title">
              <CalendarDays className="icon" />
              Select Appointment Time
            </h2>
          </div>
          <div className="card-content">
            {/* Days Selection */}
            <div className="selection-section">
              <label className="section-label">Select Day</label>
              <div className="days-grid">
                {slots.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDaySelect(index)}
                    className={`day-button ${selectedDayIndex === index ? 'selected' : ''}`}
                  >
                    {getDayLabel(index)}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDayIndex !== null && (
              <div className="selection-section">
                <div className="section-label">
                  <Clock className="icon" />
                  <span>Select Time</span>
                </div>
                <div className="time-slots-grid">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeSlotSelect(index)}
                      className={`time-slot-button ${selectedTimeSlot === index ? 'selected' : ''}`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Book Button */}
            <button
              onClick={bookAppointment}
              disabled={selectedTimeSlot === null}
              className="book-button"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;


// ------------------------------------------

