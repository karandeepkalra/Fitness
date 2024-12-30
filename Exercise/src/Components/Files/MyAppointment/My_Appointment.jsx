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

const initPay = (order, appointmentId) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: 'Appointment Payment',
    description: 'Appointment Payment',
    order_id: order.id,
    receipt: order.receipt,
    handler: async function (response) {
      try {
        console.log('Payment response:', response);
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };

        const verificationData = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          appointmentId: appointmentId
        };

        const verificationResponse = await axios.post(
          `${backendURL}/user/verify-razorpay`,
          verificationData,
          config
        );

        if (verificationResponse.data.success) {
          toast.success('Payment verified successfully!');
          // Update the appointments list to reflect the new payment status
          setAppointments(prevAppointments => 
            prevAppointments.map(app => 
              app._id === appointmentId 
                ? { ...app, payment: true ,isCompleted:true}
                : app
            )
          );
        } else {
          throw new Error(verificationResponse.data.message);
        }
      } catch (error) {
        console.error('Verification error:', error);
        toast.error(error.response?.data?.message || 'Payment verification failed');
      }
    },
    prefill: {
      name: appointments.find(app => app._id === appointmentId)?.tutData?.name || '',
      email: '',
      contact: ''
    },
    theme: {
      color: '#3399cc'
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.on('payment.failed', function (response) {
    console.error('Payment failed:', response.error);
    toast.error('Payment failed. Please try again.');
  });
  rzp.open();
};
const appointmentRazorpay = async (appointmentId) => {
  try {
    console.log('Starting Razorpay payment for appointment:', appointmentId);
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    
    const { data } = await axios.post(
      `${backendURL}/user/payment-razorpay`,
      { appointmentId },
      config
    );

    console.log('Payment API response:', data);

    if (data.success && data.order) {
      console.log('Successfully created order:', data.order);
      initPay(data.order, appointmentId);
    } else {
      toast.error(data.message || 'Failed to create payment order');
    }
  } catch (error) {
    console.error('Payment error:', error);
    toast.error(error.response?.data?.message || 'Payment initialization failed');
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
         <img src={item.tutData?.image || '/default-tutor-image.png'} 
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
                {item.payment ? (
                  <button 
                    disabled 
                    className="btn-pay btn-paid"
                  >
                    Paid
                  </button>
                ) : (
                  <button 
                    onClick={() => appointmentRazorpay(item._id)} 
                    className="btn-pay"
                  >
                    Pay Online
                  </button>
                )}
                {/* <button className="btn-cancel">Cancel Appointment</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}
export default My_Appointment;







