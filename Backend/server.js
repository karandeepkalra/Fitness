
// // // // import express from 'express';
// // // // import cors from 'cors';
// // // // import 'dotenv/config';
// // // // import { connectDB } from './config/mongodb.js';
// // // // import userRoutes from './routes/userRouter.js';
// // // // import appointmentRoutes from './routes/appointmentRouter.js';

// // // // const app = express();
// // // // const port = 4000;

// // // // // Connect to MongoDB
// // // // connectDB();

// // // // // CORS Configuration
// // // // app.use(
// // // //   cors({
// // // //     origin: 'http://localhost:5173', // React frontend URL
// // // //     methods: ['GET', 'POST', 'OPTIONS'],
// // // //     allowedHeaders: ['Content-Type', 'Authorization'],
// // // //     preflightContinue: false,
// // // //     optionsSuccessStatus: 200,
// // // //   })
// // // // );

// // // // app.use(express.json()); // Parse JSON data

// // // // // Routes
// // // // app.use('/user', userRoutes); // Handle /user routes
// // // // app.use('/user/appointment', appointmentRoutes); // Handle /user/appointment routes

// // // // // Default Route
// // // // app.get('/', (req, res) => {
// // // //   res.send('API working');
// // // // });

// // // // // Start Server
// // // // app.listen(port, () => {
// // // //   console.log(`Server started on port ${port}`);
// // // // });



// // // // import express from 'express';
// // // // import cors from 'cors';
// // // // import 'dotenv/config';
// // // // import path from 'path';
// // // // import { fileURLToPath } from 'url';
// // // // import connectCloudinary from './config/cloudinary.js';
// // // // import connectDB from './config/mongodb.js';
// // // // import TutorRouter from './routes/TutorRouter.js';
// // // // import userRoutes from './routes/userRouter.js';
// // // // import authenticateUser from './middlewares/authMiddleware.js';
// // // // import appointmentRouter from './routes/AppointmentRouter.js';



// // // // const __filename = fileURLToPath(import.meta.url);
// // // // const __dirname = path.dirname(__filename);

// // // // const app = express();
// // // // const port = process.env.PORT;

// // // // // Connect to MongoDB and Cloudinary
// // // // connectDB();
// // // // connectCloudinary();

// // // // // Middleware
// // // // app.use(express.json());



// // // // app.use((req, res, next) => {
// // // //   // Allow all origins
// // // //   res.header("Access-Control-Allow-Origin", "*"); // Allow all domains
// // // //   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// // // //   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

// // // //   // Handle preflight requests
// // // //   if (req.method === 'OPTIONS') {
// // // //     return res.status(200).end();
// // // //   }

// // // //   next();
// // // // });

// // // // // Serve files from TutorImages directory
// // // // app.use('/TutorImages', express.static(path.join(__dirname, 'TutorImages')));

// // // // // Routes
// // // // app.use('/api/tutor', TutorRouter);
// // // // app.use('/user', userRoutes);
// // // // app.use("/appointment", authenticateUser, appointmentRouter);

// // // // app.get('/', (req, res) => {
// // // //   res.send('API working');
// // // // });

// // // // app.listen(port, ()=>{
// // // // console.log(`Server started on port ${port}`)
// // // // });



// // // // import express from 'express';
// // // // import cors from 'cors';
// // // // import 'dotenv/config';
// // // // import path from 'path';
// // // // import { fileURLToPath } from 'url';
// // // // import connectCloudinary from './config/cloudinary.js';
// // // // import connectDB from './config/mongodb.js';
// // // // import TutorRouter from './routes/TutorRouter.js';
// // // // import userRoutes from './routes/userRouter.js';
// // // // import authenticateToken from './middlewares/authMiddleware.js';
// // // // import appointmentRouter from './routes/AppointmentRouter.js';

// // // // const __filename = fileURLToPath(import.meta.url);
// // // // const __dirname = path.dirname(__filename);

// // // // const app = express();
// // // // const port = process.env.PORT || 4000; // Use environment variable for port

// // // // // Connect to MongoDB and Cloudinary
// // // // connectDB();
// // // // connectCloudinary();

// // // // // Middleware
// // // // app.use(express.json());

// // // // // Allow CORS
// // // // app.use((req, res, next) => {
// // // //   res.header("Access-Control-Allow-Origin", "*");
// // // //   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// // // //   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

// // // //   if (req.method === 'OPTIONS') {
// // // //     return res.status(200).end();
// // // //   }

// // // //   next();
// // // // });

// // // // // Serve files from TutorImages directory
// // // // app.use('/TutorImages', express.static(path.join(__dirname, 'TutorImages')));

// // // // // Routes
// // // // app.use('/api/tutor', TutorRouter);
// // // // app.use('/user', userRoutes);
// // // // // app.use("/appointment", authenticateUser, appointmentRouter);
// // // // // app.use("/api/book-appointment", authenticateToken, appointmentRouter);
// // // // app.use('/user/appointments/book-appointment', appointmentRouter);
// // // // app.get('/', (req, res) => {
// // // //   res.send('API working');
// // // // });

// // // // app.listen(port, () => {
// // // //   console.log(`Server started on port ${port}`);
// // // // });


// // import express from 'express';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import path from 'path';
// // import { fileURLToPath } from 'url';
// // import connectDB from './config/mongodb.js';
// // import connectCloudinary from './config/cloudinary.js';
// // import appointmentRouter from './routes/AppointmentRouter.js';
// // import userRouter from './routes/userRouter.js';

// // // Set up environment variables
// // dotenv.config();

// // // Set up file paths
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // // Create Express app
// // const app = express();
// // const port = process.env.PORT || 4000;

// // // Connect to MongoDB and Cloudinary
// // connectDB();
// // connectCloudinary();

// // // Middleware setup
// // app.use(express.json());
// // app.use(cors());

// // // Routes
// // app.use('/user', userRouter);
// // app.use('/user/appointments', appointmentRouter); // Include the appointment routes

// // app.get('/', (req, res) => {
// //   res.send('API is working');
// // });

// // app.listen(port, () => {
// //   console.log(`Server started on port ${port}`);
// // });


// // // import express from 'express';
// // // import cors from 'cors';
// // // import 'dotenv/config';
// // // import path from 'path';
// // // import { fileURLToPath } from 'url';
// // // import connectCloudinary from './config/cloudinary.js';
// // // import connectDB from './config/mongodb.js';
// // // import TutorRouter from './routes/TutorRouter.js';
// // // import userRoutes from './routes/userRouter.js';


// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = path.dirname(__filename);

// // // const app = express();
// // // const port = process.env.PORT;

// // // // Connect to MongoDB and Cloudinary
// // // connectDB();
// // // connectCloudinary();

// // // // Middleware
// // // app.use(express.json());

// // // // const cors = require('cors');
// // // // app.use(cors());
// // // // CORS Configuration (Allow React frontend)
// // // // app.use(cors({
// // // //   origin: 'http://localhost:5173', 
// // // //   methods: ['GET', 'POST','PUT','DELETE', 'OPTIONS'],
// // // //   allowedHeaders: ['Content-Type', 'Authorization'],
// // // //   preflightContinue: true, 
// // // //   optionsSuccessStatus: 200 
// // // // }));

// // // app.use(cors())

// // // // Serve files from TutorImages directory
// // // app.use('/TutorImages', express.static(path.join(__dirname, 'TutorImages')));

// // // // Routes
// // // app.use('/api/tutor', TutorRouter);
// // // app.use('/user', userRoutes);

// // // // Default route
// // // app.get('/', (req, res) => {
// // //   res.send('API working');
// // // });



// // // // Error handling for port already in use
// // // // const startServer = () => {
// // // //   try {
// // // //     const server = app.listen(port, () => {
// // // //       console.log(`Server started on port ${port}`);
// // // //     });

// // // //     server.on('error', (error) => {
// // // //       if (error.code === 'EADDRINUSE') {
// // // //         console.log(`Port ${port} is busy. Trying port ${port + 1}`);
// // // //         server.close();
// // // //         app.listen(port + 1);
// // // //       }
// // // //     });
// // // //   } catch (error) {
// // // //     console.error('Failed to start server:', error);
// // // //     process.exit(1);
// // // //   }
// // // // };

// // // // startServer();

// // // app.listen(port, ()=>{
// // // console.log(`Server started on port ${port}`)
// // // });



// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import connectCloudinary from './config/cloudinary.js';
// import connectDB from './config/mongodb.js';
// import TutorRouter from './routes/TutorRouter.js';
// import userRoutes from './routes/userRouter.js';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const port = process.env.PORT;

// // Connect to MongoDB and Cloudinary
// connectDB();
// connectCloudinary();

// // Middleware
// app.use(express.json());

// // const cors = require('cors');
// // app.use(cors());
// // CORS Configuration (Allow React frontend)
// // app.use(cors({
// //   origin: 'http://localhost:5173', 
// //   methods: ['GET', 'POST','PUT','DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   preflightContinue: true, 
// //   optionsSuccessStatus: 200 
// // }));

// app.use(cors())

// // Serve files from TutorImages directory
// app.use('/TutorImages', express.static(path.join(__dirname, 'TutorImages')));

// // Routes
// app.use('/api/tutor', TutorRouter);
// app.use('/user', userRoutes);

// // Default route
// app.get('/', (req, res) => {
//   res.send('API working');
// });



// // Error handling for port already in use
// // const startServer = () => {
// //   try {
// //     const server = app.listen(port, () => {
// //       console.log(`Server started on port ${port}`);
// //     });

// //     server.on('error', (error) => {
// //       if (error.code === 'EADDRINUSE') {
// //         console.log(`Port ${port} is busy. Trying port ${port + 1}`);
// //         server.close();
// //         app.listen(port + 1);
// //       }
// //     });
// //   } catch (error) {
// //     console.error('Failed to start server:', error);
// //     process.exit(1);
// //   }
// // };

// // startServer();

// app.listen(port, ()=>{
// console.log(`Server started on port ${port}`)
// });



















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


