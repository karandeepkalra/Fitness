// // import express from 'express';
// // import cors from 'cors';
// // import 'dotenv/config';
// // import { connectDB } from './config/mongodb.js';
// // // import tutorRoutes from './routes/adminRouter.js';
// // import userRoutes from './routes/userRouter.js';
// // // import { loginUser } from './controllers/UserController.js';

// // const app = express();
// // const port = 4000;

// // // Connect to MongoDB
// // connectDB();

// // app.use(cors({
// //   origin: 'http://localhost:5173', // React frontend URL
// //   methods: ['GET', 'POST', 'OPTIONS'], // Ensure OPTIONS is allowed
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   preflightContinue: false,  // Automatically handle OPTIONS requests
// //   optionsSuccessStatus: 200  // Some older browsers (e.g., IE11) require this
// // }));
// // app.use(express.json());

// // app.options('*', cors());
// // // Routes

// // app.use('/user', userRoutes);

// // // Default Route
// // app.get('/', (req, res) => {
// //   res.send('API working');
// // });

// // // Start Server
// // app.listen(port, () => console.log(`Server started on port ${port}`));




// // import express from 'express';
// // import cors from 'cors';
// // import 'dotenv/config';
// // import { connectDB } from './config/mongodb.js';
// // import userRoutes from './routes/userRouter.js';

// // const app = express();
// // const port = 4000;

// // // Connect to MongoDB
// // connectDB();

// // app.use(cors({
// //   origin: 'http://localhost:5173/login', // React frontend URL
// //   methods: ['GET', 'POST', 'OPTIONS'], // Ensure OPTIONS is allowed
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   preflightContinue: false,  // Automatically handle OPTIONS requests
// //   optionsSuccessStatus: 200  // Some older browsers (e.g., IE11) require this
// // }));

// // app.use(express.json());

// // // Routes
// // app.use('/user', userRoutes);

// // // Default Route
// // app.get('/', (req, res) => {
// //   res.send('API working');
// // });

// // // Start Server
// // app.listen(port, () => {
// //   console.log(`Server started on port ${port}`);
// // });



// // import express from 'express';
// // import cors from 'cors';
// // import 'dotenv/config';
// // import { connectDB } from './config/mongodb.js';
// // import userRoutes from './routes/userRouter.js';

// // const app = express();
// // const port = 4000;

// // // Connect to MongoDB
// // connectDB();

// // app.use(cors({
// //   origin: 'http://localhost:5173',
// //   methods: ['GET', 'POST', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// // }));

// // app.use(express.json());

// // // User Routes
// // app.use('/user', userRoutes);

// // // Default Route
// // app.get('/', (req, res) => {
// //   res.send('API working');
// // });

// // // Start Server
// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });




// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { connectDB } from './config/mongodb.js';
// import userRoutes from './routes/userRouter.js';

// // Setup
// const app = express();
// const port = 4000;

// // Connect to MongoDB
// connectDB();

// // CORS Configuration (Allow React frontend)
// app.use(cors({
//   origin: 'http://localhost:5173', // React frontend URL
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   preflightContinue: false, // Automatically handle OPTIONS requests
//   optionsSuccessStatus: 200 // For older browsers (e.g., IE11)
// }));

// app.use(express.json()); // Parse JSON data

// // Routes
// app.use('/user', userRoutes);

// // Default Route
// app.get('/', (req, res) => {
//   res.send('API working');
// });

// // Start Server
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/mongodb.js';
import userRoutes from './routes/userRouter.js';

const app = express();
const port = 4000;

// Connect to MongoDB
connectDB();

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:5173', // React frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json()); // Parse JSON data

// Routes
app.use('/user', userRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('API working');
});

// Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
