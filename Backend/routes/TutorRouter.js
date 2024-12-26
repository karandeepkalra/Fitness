import express from 'express';
import { addTutor,allTutors,loginTutor, tutorList } from '../controllers/TutorController.js';
import upload from '../middlewares/multer.js';

const TutorRouter = express.Router();

TutorRouter.post('/register',upload.single('image'),addTutor)
TutorRouter.post('/login',loginTutor)
TutorRouter.post('/all-tutors',allTutors)
TutorRouter.get('list',tutorList)
export default TutorRouter;
