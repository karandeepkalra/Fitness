import express from 'express';
import User from '../models/UserModel.js';
import {addUser,loginUser} from '../controllers/UserController.js'
const router = express.Router();

// GET: Fetch all user
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to fetch users', error: err.message });
//   }
// });

// POST: Add a new user
// router.post('/', async (req, res) => {
//   try {
//     const { name,email,password } = req.body; // Destructure request body
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const newuser = new User({ name,email,password});
//     await newuser.save();
//     res.status(201).json({ message: 'user created successfully', user:newuser });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to create users', error: err.message });
//   }
// });


router.post('/',addUser)
router.post('/login',loginUser)
export default router;
