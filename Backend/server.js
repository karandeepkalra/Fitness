import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongodb.js';
import TutorRouter from './routes/TutorRouter.js';
import userRoutes from './routes/userRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());

app.use(cors())

// Serve files from TutorImages directory
app.use('/TutorImages', express.static(path.join(__dirname, 'TutorImages')));

// Routes
app.use('/api/tutor', TutorRouter);
app.use('/user', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API working');
});

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
  });


