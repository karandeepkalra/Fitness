// import mongoose from "mongoose";
// export const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb+srv://Karandeep:karan_1750@cluster0.z35vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//         console.log("MongoDB Connected!");
//     }
//     catch (error) {
//         console.log(error);
//     }
// }



import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};
