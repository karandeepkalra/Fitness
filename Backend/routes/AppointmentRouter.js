// import express from 'express';
// import Appointment from '../models/Appointment.js';
// import { verifyToken } from '../middleware/authMiddleware.js'; // Assuming you have a middleware for token verification

// const router = express.Router();

// // Book an appointment route
// router.post('/book-appointment', verifyToken, async (req, res) => {
//   const { tutorId, dateTime } = req.body;

//   if (!tutorId || !dateTime) {
//     return res.status(400).json({ message: 'TutorId and DateTime are required' });
//   }

//   try {
//     const appointment = new Appointment({
//       tutorId,
//       dateTime,
//       userId: req.user.id, // Assuming user is set in the request after token verification
//     });

//     await appointment.save();
//     res.status(200).json({ message: 'Appointment booked successfully', appointment });
//   } catch (error) {
//     res.status(500).json({ message: 'Error booking appointment', error });
//   }
// });

// export default router;



// import express from 'express';
// import Appointment from '../models/Appointment.js';

// const router = express.Router();

// // POST: Book an appointment - Now this route will be under /user/appointment/book-appointment
// router.post('/appointment/book-appointment', async (req, res) => {
//   const { tutorId, dateTime, token } = req.body;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized. No token provided.' });
//   }

//   try {
//     // Check if the appointment already exists
//     const existingAppointment = await Appointment.findOne({ tutorId, dateTime });
//     if (existingAppointment) {
//       return res.status(400).json({ message: 'This slot is already booked.' });
//     }

//     // Create new appointment
//     const newAppointment = new Appointment({
//       tutorId,
//       dateTime,
//     });

//     const savedAppointment = await newAppointment.save();
//     res.status(200).json({ message: 'Appointment booked successfully!', updatedSlots: [savedAppointment] });

//   } catch (error) {
//     console.error('Error booking appointment:', error);
//     res.status(500).json({ message: 'An error occurred while booking the appointment.' });
//   }
// });

// export default router;

import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';  // Corrected import

import appointmentController from '../controllers/appointmentController.js';

const router = express.Router();

// Route for booking an appointment
router.post('/book-appointment', authMiddleware, appointmentController.bookAppointment);

export default router;
