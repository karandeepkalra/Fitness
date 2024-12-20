import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongodb.js';
import adminRouter from './routes/adminRouter.js';
import userRoutes from './routes/userRouter.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());

// CORS Configuration (Allow React frontend)
app.use(cors({
  origin: 'http://localhost:5173', // React frontend URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false, // Automatically handle OPTIONS requests
  optionsSuccessStatus: 200 // For older browsers (e.g., IE11)
}));

// Serve files from TutorImages directory
app.use('/TutorImages', express.static(path.join(__dirname, 'TutorImages')));

// Routes
app.use('/api/admin', adminRouter);
app.use('/user', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API working');
});

// Error handling for port already in use
const startServer = () => {
  try {
    const server = app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy. Trying port ${port + 1}`);
        server.close();
        app.listen(port + 1);
      }
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();