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




import express from 'express';
import { addUser, loginUser, getProfile, updateProfile } from '../controllers/UserController.js';
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

export default router;

