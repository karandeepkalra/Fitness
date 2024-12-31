import express from 'express';
import { addTutor,allTutors,loginTutor, tutorList, getTutorById, appointmentsTutor, tutorDashboard, tutorProfile,updateTutorProfile} from '../controllers/TutorController.js';
import upload from '../middlewares/multer.js';
import authTutor from '../middlewares/authTutor.js';

const TutorRouter = express.Router();

TutorRouter.post('/register',upload.single('image'),addTutor)
TutorRouter.post('/login',loginTutor)
TutorRouter.post('/all-tutors',allTutors)
TutorRouter.get('/list',tutorList)
TutorRouter.get('/profile', authTutor, tutorProfile)

TutorRouter.get("/:id", getTutorById);

TutorRouter.post('/appointments', authTutor, appointmentsTutor);

// Change from GET to POST since we need to send tutId in body
TutorRouter.post('/dashboard', authTutor, tutorDashboard)
TutorRouter.post('/update-profile', authTutor, updateTutorProfile)
// TutorRouter.post('/update-profile-image', authTutor, upload.single('image'), updateProfileImage);
export default TutorRouter;
