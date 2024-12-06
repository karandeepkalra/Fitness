import express from 'express';
import Tutor from '../models/TutorModel.js';

const router = express.Router();

// GET: Fetch all tutors
router.get('/', async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.status(200).json(tutors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch tutors', error: err.message });
  }
});

// POST: Add a new tutor
router.post('/', async (req, res) => {
  try {
    const { name, speciality, fees } = req.body; // Destructure request body
    if (!name || !speciality || !fees) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newTutor = new Tutor({ name, speciality, fees});
    await newTutor.save();
    res.status(201).json({ message: 'Tutor created successfully', tutor: newTutor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create tutor', error: err.message });
  }
});

export default router;
