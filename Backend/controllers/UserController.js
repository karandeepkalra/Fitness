import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Razorpay from 'razorpay';
import UserModel from '../models/UserModel.js';
import TutorModel from '../models/TutorModel.js';
import appointmentModel from '../models/appointmentModel.js';
import crypto from 'crypto';

// Initialize Razorpay
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Sign Up
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: 'Missing Details' });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Invalid email' });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: 'Password too short' });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'default_secret_key');
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'default_secret_key');
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get Profile
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Retrieved from auth middleware
    const userData = await UserModel.findById(userId).select('-password');

    if (!userData) {
      return res.json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, userData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Update Profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Retrieved from auth middleware
    const { name, phone, dob, gender } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { name, phone, dob, gender },
      { new: true }
    );

    if (!updatedUser) {
      return res.json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, message: 'Profile updated successfully', data: updatedUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const bookAppointment = async (req, res) => {
  try {
    const { tutId, slotDate, slotTime } = req.body;

    // Find the tutor by ID
    const tutor = await TutorModel.findById(tutId);
    if (!tutor) {
      return res.status(404).json({ success: false, message: "Tutor not found." });
    }

    if (!tutor.available) {
      return res.status(400).json({ success: false, message: "Tutor is not available." });
    }

    // Check if the slot is already booked in the tutor's `slots_booked`
    const slotsBooked = tutor.slots_booked || {};
    if (slotsBooked[slotDate]?.includes(slotTime)) {
      return res.status(400).json({ success: false, message: "Slot is already booked." });
    }

    // If the slot is not yet booked, update the tutor's `slots_booked`
    if (!slotsBooked[slotDate]) {
      slotsBooked[slotDate] = [];
    }
    slotsBooked[slotDate].push(slotTime);

    // Create a new appointment
    const appointment = new appointmentModel({
      userId: req.user.id,
      tutId,
      slotDate,
      slotTime,
      userData: req.user,
      tutData: tutor, // Keep the tutor data in the appointment document
      amount: tutor.fees,
      date: Date.now(),
    });

    // Save the appointment first
    const savedAppointment = await appointment.save();

    // Update the tutor's `slots_booked` field in the tutor's actual document using `findByIdAndUpdate`
    await TutorModel.findByIdAndUpdate(
      tutId,
      {
        $set: { slots_booked: slotsBooked },
      },
      { new: true } // Return the updated tutor document after the update
    );

    // Send success response
    res.status(200).json({ success: true, message: "Appointment booked successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to book appointment." });
  }
};

const listAppointment = async (req, res) => {
  try {
    // Get userId from auth middleware instead of req.body
    const userId = req.user.id;
    
    const appointments = await appointmentModel.find({ userId })
      .sort({ date: -1 }); // Sort by date in descending order
    
    if (!appointments) {
      return res.status(404).json({ success: false, message: "No appointments found" });
    }

    res.status(200).json({ success: true, appointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const paymRazorpay = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    
    console.log('Payment request received for appointment:', appointmentId);

    if (!appointmentId) {
      return res.status(400).json({ 
        success: false, 
        message: "Appointment ID is required" 
      });
    }

    const appointmentData = await appointmentModel.findById(appointmentId);
    
    if (!appointmentData) {
      return res.status(404).json({ 
        success: false, 
        message: "Appointment not found" 
      });
    }

    if (appointmentData.cancelled) {
      return res.status(400).json({ 
        success: false, 
        message: "Appointment is cancelled" 
      });
    }

    if (!appointmentData.amount) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid appointment amount" 
      });
    }

    const options = {
      amount: Math.round(appointmentData.amount * 100),
      currency: 'INR',
      receipt: `rcpt_${appointmentId}`
    };

    const order = await razorpayInstance.orders.create(options);

    if (!order) {
      return res.status(500).json({ 
        success: false, 
        message: "Failed to create payment order" 
      });
    }

    return res.status(200).json({ 
      success: true, 
      order,
      amount: options.amount,
      currency: options.currency,
      appointmentId
    });

  } catch (error) {
    console.error('Payment error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message || "Payment initialization failed" 
    });
  }
};

const verifyRazorpay = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      appointmentId 
    } = req.body;

    // Validate all required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !appointmentId) {
      return res.status(400).json({
        success: false,
        message: "Missing required payment verification fields"
      });
    }

    // Create signature verification data
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    
    // Verify signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    // Compare signatures
    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature"
      });
    }

    // Update appointment payment status
    const updatedAppointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { 
        payment: true,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id
      },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      appointment: updatedAppointment
    });
    
  } catch (error) {
    console.error('Verification error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || "Payment verification failed"
    });
  }
};


export { addUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment,paymRazorpay,verifyRazorpay };














