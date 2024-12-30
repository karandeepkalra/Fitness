import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';  // Corrected import

import appointmentController from '../controllers/appointmentController.js';

const router = express.Router();

// Route for booking an appointment
router.post('/book-appointment', authMiddleware, appointmentController.bookAppointment);

export default router;
