// latest working code
// import express from 'express';
// import { addUser, loginUser, getProfile, updateProfile,bookAppointment , listAppointment} from '../controllers/UserController.js';
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

// router.post('/book-appointment', authUser,bookAppointment)

// router.get('/appointments',authUser,listAppointment)


// router.get('/:userId/details', authUser, async (req, res) => {
//     try {
//       const userId = req.params.userId;
//       const user = await UserModel.findById(userId).select('name dob');
//       if (!user) {
//         return res.status(404).json({ success: false, message: 'User not found' });
//       }
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   });
  
// export default router; 



import express from 'express';
import { 
  addUser, 
  loginUser, 
  getProfile, 
  updateProfile, 
  bookAppointment, 
  listAppointment,
  paymRazorpay,
  verifyRazorpay
} from '../controllers/UserController.js';
import authUser from '../middlewares/authUser.js';

const router = express.Router();

// Sign Up Route
router.post('/', addUser);

// Login Route
router.post('/login', loginUser);

// Get Profile
router.get('/get-profile', authUser, getProfile);

// Update Profile
router.post('/update-profile', authUser, updateProfile);

// Appointment Routes
router.post('/book-appointment', authUser, bookAppointment);
router.get('/appointments', authUser, listAppointment);

// Payment Routes
router.post('/payment-razorpay', authUser, paymRazorpay);
router.post('/verify-razorpay', authUser, verifyRazorpay);

// User Details Route
router.get('/:userId/details', authUser, async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.findById(userId).select('name dob');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

