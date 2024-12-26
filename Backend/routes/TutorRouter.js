import express from 'express';
import { addTutor,loginTutor } from '../controllers/TutorController.js';
import upload from '../middlewares/multer.js';

const TutorRouter = express.Router();

TutorRouter.post('/register',upload.single('image'),addTutor)
TutorRouter.post('/login',loginTutor)

export default TutorRouter;
