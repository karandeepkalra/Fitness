// import validator from "validator"
// import bcrypt from 'bcrypt'
// import {v2 as cloudinary} from 'cloudinary'
// import TutorModel from "../models/TutorModel.js"
// import fs from 'fs'
// import mongoose from 'mongoose'
// import jwt from 'jsonwebtoken'

// const addTutor = async(req, res) => {
//     try {
//         const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
//         const imageFile = req.file;
        
//         if (!imageFile) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Image file is required"
//             });
//         }
//         if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Missing details"
//             });
//         }

//         if(!validator.isEmail(email)) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Please enter valid email"
//             });
//         }

//         if(password.length < 8) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Please enter a strong password"
//             });
//         }

//         const existingTutor = await TutorModel.findOne({ email });
//         if (existingTutor) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email already registered"
//             });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         let parsedAddress;
//         try {
//             parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
//         } catch (e) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Invalid address format"
//             });
//         }

//         try {
//             const db = mongoose.connection.db;
//             const collections = await db.listCollections({ name: 'tutors' }).toArray();
            
//             if (collections.length === 0) {
//                 await db.createCollection('tutors');
//                 console.log("'tutors' collection created");
//             }

//             const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//                 folder: 'tutors',
//                 resource_type: 'auto',
//                 allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
//                 transformation: [{
//                     quality: 'auto:good',
//                     fetch_format: 'auto'
//                 }]
//             });

//             const tutorData = {
//                 name,
//                 email,
//                 image: imageUpload.secure_url,
//                 password: hashedPassword,
//                 speciality,
//                 degree,
//                 experience,
//                 about,
//                 fees: Number(fees),
//                 address: parsedAddress,
//                 date: Date.now()
//             };

//             const newTutor = new TutorModel(tutorData);
//             await newTutor.save();

//             const token = jwt.sign({ id: tutor._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });

//             if (fs.existsSync(imageFile.path)) {
//                 fs.unlinkSync(imageFile.path);
//             }

//             return res.status(201).json({
//                 success: true, 
//                 message: "Tutor added successfully",token,
//                 tutor: {
//                     name: newTutor.name,
//                     email: newTutor.email,
//                     image: newTutor.image,
//                     speciality: newTutor.speciality,
//                     degree: newTutor.degree,
//                     experience: newTutor.experience,
//                     about: newTutor.about,
//                     fees: newTutor.fees,
//                     address: newTutor.address
//                 }
//             });

//         } catch (uploadError) {
//             console.error('Operation error:', uploadError);
            
//             if (fs.existsSync(imageFile.path)) {
//                 fs.unlinkSync(imageFile.path);
//             }

//             if (uploadError.message.includes('Invalid namespace')) {
//                 return res.status(500).json({
//                     success: false,
//                     message: "Database configuration error. Please contact administrator."
//                 });
//             }

//             return res.status(500).json({
//                 success: false, 
//                 message: `Operation failed: ${uploadError.message}`
//             });
//         }

//     } catch (error) {
//         console.error("Error in addTutor:", error);
        
//         if (imageFile && fs.existsSync(imageFile.path)) {
//             fs.unlinkSync(imageFile.path);
//         }

//         return res.status(500).json({
//             success: false, 
//             message: "Internal server error. Please try again later."
//         });
//     }
// };


// const loginTutor = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       if (!email || !password) {
//         return res.json({ success: false, message: 'Email and password are required' });
//       }
  
//       const tutor = await TutorModel.findOne({ email });
//       if (!tutor) {
//         return res.json({ success: false, message: 'Tutor not found' });
//       }
  
//       const isMatch = await bcrypt.compare(password, tutor.password);
//       if (!isMatch) {
//         return res.json({ success: false, message: 'Incorrect password' });
//       }
  
//       const token = jwt.sign({ id: tutor._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });
  
//       res.json({ success: true, token });
//     } catch (error) {
//       res.json({ success: false, message: error.message });
//     }
//   };

// export { addTutor , loginTutor};



// import validator from "validator";
// import bcrypt from 'bcrypt';
// import { v2 as cloudinary } from 'cloudinary';
// import TutorModel from "../models/TutorModel.js";
// import fs from 'fs';
// import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';

// const addTutor = async (req, res) => {
//     try {
//         const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
//         const imageFile = req.file;
        
//         if (!imageFile) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Image file is required"
//             });
//         }
//         if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Missing details"
//             });
//         }

//         if (!validator.isEmail(email)) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Please enter valid email"
//             });
//         }

//         if (password.length < 8) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Please enter a strong password"
//             });
//         }

//         const existingTutor = await TutorModel.findOne({ email });
//         if (existingTutor) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email already registered"
//             });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         let parsedAddress;
//         try {
//              parsedAddress = { address1: req.body.address1, address2: req.body.address2 };
//         } catch (e) {
//             return res.status(400).json({
//                 success: false, 
//                 message: "Invalid address format"
//             });
//         }

//         try {
//             const db = mongoose.connection.db;
//             const collections = await db.listCollections({ name: 'tutors' }).toArray();
            
//             if (collections.length === 0) {
//                 await db.createCollection('tutors');
//                 console.log("'tutors' collection created");
//             }

//             const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//                 folder: 'tutors',
//                 resource_type: 'auto',
//                 allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
//                 transformation: [{
//                     quality: 'auto:good',
//                     fetch_format: 'auto'
//                 }]
//             });

//             const tutorData = {
//                 name,
//                 email,
//                 image: imageUpload.secure_url,
//                 password: hashedPassword,
//                 speciality,
//                 degree,
//                 experience,
//                 about,
//                 fees: Number(fees),
//                 address: parsedAddress,
//                 date: Date.now()
//             };

//             const newTutor = new TutorModel(tutorData);
//             await newTutor.save();

//             const token = jwt.sign({ id: newTutor._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });

//             if (fs.existsSync(imageFile.path)) {
//                 fs.unlinkSync(imageFile.path);
//             }

//             return res.status(201).json({
//                 success: true, 
//                 message: "Tutor added successfully", 
//                 token,
//                 tutor: {
//                     name: newTutor.name,
//                     email: newTutor.email,
//                     image: newTutor.image,
//                     speciality: newTutor.speciality,
//                     degree: newTutor.degree,
//                     experience: newTutor.experience,
//                     about: newTutor.about,
//                     fees: newTutor.fees,
//                     address: newTutor.address
//                 }
//             });

//         } catch (uploadError) {
//             console.error('Operation error:', uploadError);
            
//             if (fs.existsSync(imageFile.path)) {
//                 fs.unlinkSync(imageFile.path);
//             }

//             if (uploadError.message.includes('Invalid namespace')) {
//                 return res.status(500).json({
//                     success: false,
//                     message: "Database configuration error. Please contact administrator."
//                 });
//             }

//             return res.status(500).json({
//                 success: false, 
//                 message: `Operation failed: ${uploadError.message}`
//             });
//         }

//     } catch (error) {
//         console.error("Error in addTutor:", error);
        
//         if (imageFile && fs.existsSync(imageFile.path)) {
//             fs.unlinkSync(imageFile.path);
//         }

//         return res.status(500).json({
//             success: false, 
//             message: "Internal server error. Please try again later."
//         });
//     }
// };

// const loginTutor = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.json({ success: false, message: 'Email and password are required' });
//         }

//         const tutor = await TutorModel.findOne({ email });
//         if (!tutor) {
//             return res.json({ success: false, message: 'Tutor not found' });
//         }

//         const isMatch = await bcrypt.compare(password, tutor.password);
//         if (!isMatch) {
//             return res.json({ success: false, message: 'Incorrect password' });
//         }

//         const token = jwt.sign({ id: tutor._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });

//         res.json({ success: true, token });
//     } catch (error) {
//         res.json({ success: false, message: error.message });
//     }
// };

// export { addTutor, loginTutor };

import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import TutorModel from "../models/TutorModel.js"
import fs from 'fs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'



const addTutor = async (req, res) => {
    try {
      const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
      const imageFile = req.file;
  
      // Validate required fields
      if (!imageFile) {
        return res.status(400).json({ success: false, message: "Image file is required" });
      }
  
      if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
        return res.status(400).json({ success: false, message: "Missing details" });
      }
  
      if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: "Please enter a valid email" });
      }
  
      if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
      }
  
      // Check if email already exists
      const existingTutor = await TutorModel.findOne({ email });
      if (existingTutor) {
        return res.status(400).json({ success: false, message: "Email already registered" });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Parse address
      let parsedAddress;
      try {
        parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
      } catch (e) {
        return res.status(400).json({ success: false, message: "Invalid address format" });
      }
  
      // Upload image to Cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        folder: 'tutors',
        resource_type: 'auto',
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
        transformation: [{ quality: 'auto:good', fetch_format: 'auto' }],
      });
  
      // Create tutor object
      const tutorData = {
        name,
        email,
        image: imageUpload.secure_url,
        password: hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees: Number(fees),
        address: parsedAddress,
        date: Date.now(),
      };
  
      // Save to database
      const newTutor = new TutorModel(tutorData);
      await newTutor.save();
  
      // Generate JWT token
      const token = jwt.sign({ id: newTutor._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });
  
      // Remove the uploaded file from local storage
      if (fs.existsSync(imageFile.path)) {
        fs.unlinkSync(imageFile.path);
      }
  
      return res.status(201).json({
        success: true,
        message: "Tutor registered successfully",
        token,
        tutor: {
          name: newTutor.name,
          email: newTutor.email,
          image: newTutor.image,
          speciality: newTutor.speciality,
          degree: newTutor.degree,
          experience: newTutor.experience,
          about: newTutor.about,
          fees: newTutor.fees,
          address: newTutor.address,
        },
      });
    } catch (error) {
      console.error("Error in addTutor:", error);
  
      // Remove uploaded file on error
      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
  
      return res.status(500).json({ success: false, message: "Internal server error. Please try again later." });
    }
  };


  const loginTutor = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Validate input
      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
      }
  
      // Check if tutor exists
      const tutor = await TutorModel.findOne({ email });
      if (!tutor) {
        return res.status(404).json({ success: false, message: 'Tutor not found' });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, tutor.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Incorrect password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: tutor._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });
  
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        token,
        tutor: {
          name: tutor.name,
          email: tutor.email,
          speciality: tutor.speciality,
          degree: tutor.degree,
          experience: tutor.experience,
          about: tutor.about,
          fees: tutor.fees,
          address: tutor.address,
          image: tutor.image,
        },
      });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  
  export { addTutor , loginTutor};

  