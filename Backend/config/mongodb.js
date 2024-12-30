import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Remove trailing slash and connect to the test database
    const mongoUri = process.env.MONGO_URI.replace(/\/$/, '');
    
    await mongoose.connect(`${mongoUri}/test`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'test'
    });

    // Get reference to the database
    const db = mongoose.connection.db;

    // Check if tutors collection exists
    const collections = await db.listCollections({ name: 'tutors' }).toArray();
    
    if (collections.length > 0) {
      console.log("'tutors' collection exists - ready for insertions");
    } else {
      // Create the collection if it doesn't exist
      await db.createCollection('tutors');
      console.log("'tutors' collection created successfully");
    }

    console.log("MongoDB Connected Successfully!");

    // Monitor connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.once('open', () => {
      console.log(`Connected to database: ${mongoose.connection.db.databaseName}`);
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;