import Appointment from '../models/Appointment.js'; // Assuming you have an Appointment model
import { validationResult } from 'express-validator';

// Controller for booking an appointment
const bookAppointment = async (req, res) => {
  try {
    // Extract the data from the request body
    const { tutorId, dateTime } = req.body;

    // Validation checks if needed
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Logic to create a new appointment
    const newAppointment = new Appointment({
      tutorId,
      dateTime,
      userId: req.user._id, // Assuming you attach the user to the request from the authMiddleware
    });

    // Save the new appointment to the database
    await newAppointment.save();

    // Send success response
    res.status(201).json({
      message: 'Appointment booked successfully',
      newAppointment,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to book the appointment',
      error: err.message,
    });
  }
};

// Export the controller
const appointmentController = {
  bookAppointment,
};

export default appointmentController;
