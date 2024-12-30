
import express from 'express';
import { addTutor,allTutors,loginTutor, tutorList, getTutorById, appointmentsTutor,tutorDashboard} from '../controllers/TutorController.js';
import upload from '../middlewares/multer.js';
import authTutor from '../middlewares/authTutor.js';

const TutorRouter = express.Router();

TutorRouter.post('/register',upload.single('image'),addTutor)
TutorRouter.post('/login',loginTutor)
TutorRouter.post('/all-tutors',allTutors)
TutorRouter.get('/list',tutorList)
// TutorRouter.get('/change-availability',changeAvailability)
TutorRouter.get("/:id", getTutorById);
TutorRouter.get('/dashboard',tutorDashboard)
TutorRouter.get('/appointments',authTutor,appointmentsTutor)


export default TutorRouter;
