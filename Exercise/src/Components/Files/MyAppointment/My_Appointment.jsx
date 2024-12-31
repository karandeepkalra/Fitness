// import React, { useContext, useEffect, useState } from "react";
// import { AContext } from "../Context/AppContext";
// import './My_Appointment.css';
// import axios from "axios";
// import { toast } from "react-toastify";

// const My_Appointment = () => {
//   const { backendURL, token } = useContext(AContext);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const months= ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  
//   const slotDateFormat =(slotDate) =>{
//     const dateArray = slotDate.split('_')
//     return dateArray[0]+" " +months[Number(dateArray[1])] + " " + dateArray[2]
//   }
//   const getUserAppointments = async () => {
//     try {
//       setLoading(true);
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };

//       const { data } = await axios.get(`${backendURL}/user/appointments`, config);
      
//       if (data.success) {
//         setAppointments(data.appointments);
//         console.log("Fetched appointments:", data.appointments);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       toast.error(error.response?.data?.message || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

// const initPay = (order, appointmentId) => {
//   const options = {
//     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//     amount: order.amount,
//     currency: order.currency,
//     name: 'Appointment Payment',
//     description: 'Appointment Payment',
//     order_id: order.id,
//     receipt: order.receipt,
//     handler: async function (response) {
//       try {
//         console.log('Payment response:', response);
//         const config = {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         };

//         const verificationData = {
//           razorpay_order_id: response.razorpay_order_id,
//           razorpay_payment_id: response.razorpay_payment_id,
//           razorpay_signature: response.razorpay_signature,
//           appointmentId: appointmentId
//         };

//         const verificationResponse = await axios.post(
//           `${backendURL}/user/verify-razorpay`,
//           verificationData,
//           config
//         );

//         if (verificationResponse.data.success) {
//           toast.success('Payment verified successfully!');
//           // Update the appointments list to reflect the new payment status
//           setAppointments(prevAppointments => 
//             prevAppointments.map(app => 
//               app._id === appointmentId 
//                 ? { ...app, payment: true ,isCompleted:true}
//                 : app
//             )
//           );
//         } else {
//           throw new Error(verificationResponse.data.message);
//         }
//       } catch (error) {
//         console.error('Verification error:', error);
//         toast.error(error.response?.data?.message || 'Payment verification failed');
//       }
//     },
//     prefill: {
//       name: appointments.find(app => app._id === appointmentId)?.tutData?.name || '',
//       email: '',
//       contact: ''
//     },
//     theme: {
//       color: '#3399cc'
//     }
//   };

//   const rzp = new window.Razorpay(options);
//   rzp.on('payment.failed', function (response) {
//     console.error('Payment failed:', response.error);
//     toast.error('Payment failed. Please try again.');
//   });
//   rzp.open();
// };

// const appointmentRazorpay = async (appointmentId) => {
//   try {
//     console.log('Starting Razorpay payment for appointment:', appointmentId);
    
//     const config = {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     };
    
//     const { data } = await axios.post(
//       `${backendURL}/user/payment-razorpay`,
//       { appointmentId },
//       config
//     );

//     console.log('Payment API response:', data);

//     if (data.success && data.order) {
//       console.log('Successfully created order:', data.order);
//       initPay(data.order, appointmentId);
//     } else {
//       toast.error(data.message || 'Failed to create payment order');
//     }
//   } catch (error) {
//     console.error('Payment error:', error);
//     toast.error(error.response?.data?.message || 'Payment initialization failed');
//   }
// };


//   useEffect(() => {
//     if (token) {
//       getUserAppointments();
//     }
//   }, [token, backendURL]);

//   if (loading) {
//     return <div className="loading">Loading appointments...</div>;
//   }

//   return (
//     <div className="appointments-container">
//       <h1 className="appointments-title">My Appointments</h1>
      
//       {appointments.length === 0 ? (
//         <div className="no-appointments">
//           <p>No appointments found</p>
//         </div>
//       ) : (
//         <div className="appointments-grid">
//           {appointments.map((item, index) => (
//             <div key={item._id || index} className="appointment-card">
//               <div className="appointment-image-container">
//                 <img 
//                   src={item.tutData?.image || '/default-tutor-image.png'} 
//                   alt="tutor" 
//                   className="appointment-image" 
//                 />
//               </div>
              
//               <div className="appointment-details">
//                 <h2 className="appointment-name">{item.tutData?.name}</h2>
//                 <p className="appointment-speciality">{item.tutData?.speciality}</p>
//                 <div className="appointment-datetime">
//                   <p>Address:</p>
//                   <p>{item.tutData?.address?.line1}</p>
//                   <p>{item.tutData?.address?.line2}</p>
//                   <p>
//                     <span>Date & Time: </span>
//                     {slotDateFormat(item.slotDate)} | {item.slotTime}
//                   </p>
//                 </div>
                
//                 <div className="appointment-actions">
//                   {item.payment ? (
//                   <button 
//                   disabled 
//                   className="btn-pay btn-paid"
//                 >
//                   Paid
//                 </button>
//               ) : (
//                 <button 
//                   onClick={() => appointmentRazorpay(item._id)} 
//                   className="btn-pay"
//                 >
//                   Pay Online
//                 </button>
//               )}
//               <button className="btn-cancel">Cancel Appointment</button>
//                 </div>
//                </div>
//              </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default My_Appointment;



import React, { useContext, useEffect, useState } from "react";
import { AContext } from "../Context/AppContext";
import { AContext } from "../Context/AppContext";
import './My_Appointment.css';
import axios from "axios";
import { toast } from "react-toastify";
import axios from "axios";
import { toast } from "react-toastify";

const My_Appointment = () => {
  const { backendURL, token } = useContext(AContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_');
    return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2];
  };

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
    // Check if Razorpay is loaded
    if (typeof window.Razorpay === 'undefined') {
      toast.error('Razorpay SDK failed to load. Please try again.');
      return;
    }

    try {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Appointment Payment',
        description: 'Appointment Payment',
        order_id: order.id,
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
              setAppointments(prevAppointments => 
                prevAppointments.map(app => 
                  app._id === appointmentId 
                    ? { ...app, payment: true, isCompleted: true }
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
        },
        modal: {
          ondismiss: function() {
            toast.info('Payment cancelled');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response) {
        console.error('Payment failed:', response.error);
        toast.error('Payment failed. Please try again.');
      });

      rzp.open();
    } catch (error) {
      console.error('Razorpay initialization error:', error);
      toast.error('Failed to initialize payment. Please try again.');
    }
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      // Check if Razorpay is loaded before proceeding
      if (typeof window.Razorpay === 'undefined') {
        toast.error('Please wait while we load the payment system.');
        return;
      }

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

  // Check for Razorpay SDK on component mount
  useEffect(() => {
    if (typeof window.Razorpay === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        console.log('Razorpay SDK loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay SDK');
        toast.error('Payment system failed to load. Please refresh the page.');
      };
      document.body.appendChild(script);
    }
  }, []);

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
                    {slotDateFormat(item.slotDate)} | {item.slotTime}
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





