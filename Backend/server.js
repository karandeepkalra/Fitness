import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/mongodb.js';
import tutorRoutes from './routes/adminRouter.js';
import userRoutes from './routes/userRouter.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/tutor', tutorRoutes);
app.use('/user', userRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('API working');
});

// Start Server
app.listen(port, () => console.log(`Server started on port ${port}`));


app.use(
  cors({
      origin: 'http://localhost:5173',
  })
);
