// import express from 'express';
// import { addUser, loginUser,getProfile ,updateProfile} from '../controllers/UserController.js';
// import authUser from '../middlewares/authUser.js';
// const router = express.Router();

// router.post('/', (req, res, next) => {
//     console.log("POST /user/ route hit");
//     next();
// }, addUser);

// router.post('/login', (req, res, next) => {
//     console.log("POST /user/login route hit");
//     next(); 
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

