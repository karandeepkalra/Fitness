// import express from 'express';
// import { addUser, loginUser,getProfile ,updateProfile} from '../controllers/UserController.js';
// import authUser from '../middlewares/authUser.js';
// // import upload from '../middlewares/multer.js';
// const router = express.Router();

// // Sign Up Route
// router.post('/', (req, res, next) => {
//     console.log("POST /user/ route hit");
//     next(); // Proceed to the actual controller
// }, addUser);

// // Login Route
// router.post('/login', (req, res, next) => {
//     console.log("POST /user/login route hit");
//     next(); // Proceed to the actual controller
// }, loginUser);

// router.get('/get-profile',authUser,getProfile)
// router.post('/update-profile',authUser,updateProfile)

// export default router;




// import express from 'express';
// import { addUser, loginUser, getProfile, updateProfile } from '../controllers/UserController.js';
// import authUser from '../middlewares/authUser.js';

// const router = express.Router();

// // Sign Up Route
// router.post('/', addUser);

// // Login Route
// router.post('/login', loginUser);

// // Get Profile
// router.get('/get-profile', authUser, getProfile);

// // Update Profile
// router.post('/update-profile', authUser, updateProfile);

// export default router;



import express from 'express';
import { addUser, loginUser, getProfile, updateProfile} from '../controllers/UserController.js';
import authUser from '../middlewares/authUser.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Sign Up Route
router.post('/', addUser);

// Login Route
router.post('/login', loginUser);

// Get Profile
router.get('/get-profile', authUser, getProfile);

// Update Profile
router.post('/update-profile', authUser, updateProfile);
// router.post('/book-appointment',authUser,bookAppointment);
// router.post("/book-appointment", (req, res) => {
//     const { tutorId, dateTime } = req.body;
//     // Handle the appointment logic (e.g., store in the database)
//     res.json({
//       success: true,
//       updatedSlots: updatedSlots,  // Send the updated slots after booking
//     });
//   });


// In your AppointmentRouter.js or equivalent
router.post('/appointment/book-appointment', authMiddleware, async (req, res) => {
    // Assume the necessary data (e.g., TutorId, dateTime) is in the request body
    const { tutorId, dateTime } = req.body;
  
    // Logic to store appointment or mock response for testing
    try {
      // Assuming you want to save appointment data in the database
      const newAppointment = new Appointment({ tutorId, dateTime });
      await newAppointment.save();
  
      // Send success response
      res.status(201).json({ message: 'Appointment booked successfully', newAppointment });
    } catch (err) {
      res.status(500).json({ message: 'Failed to book the appointment', error: err.message });
    }
  });
  
export default router;

