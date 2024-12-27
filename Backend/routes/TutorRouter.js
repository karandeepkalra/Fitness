import express from 'express';
import { addTutor,allTutors,loginTutor, tutorList, getTutorById} from '../controllers/TutorController.js';
import upload from '../middlewares/multer.js';

const TutorRouter = express.Router();

TutorRouter.post('/register',upload.single('image'),addTutor)
TutorRouter.post('/login',loginTutor)
TutorRouter.post('/all-tutors',allTutors)
TutorRouter.get('/list',tutorList)
// TutorRouter.get('/change-availability',changeAvailability)
TutorRouter.get("/:id", getTutorById);

export default TutorRouter;
