import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import TutorModel from "../models/TutorModel.js"
import fs from 'fs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
 
import { toNamespacedPath } from "path"


// correct working code
// const addTutor = async (req, res) => {
//     try {
//       const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
//       const imageFile = req.file;

//       // Validate required fields
//       if (!imageFile) {
//         return res.status(400).json({ success: false, message: "Image file is required" });
//       }

//       if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
//         return res.status(400).json({ success: false, message: "Missing details" });
//       }

//       if (!validator.isEmail(email)) {
//         return res.status(400).json({ success: false, message: "Please enter a valid email" });
//       }

//       if (password.length < 8) {
//         return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
//       }

//       // Check if email already exists
//       const existingTutor = await TutorModel.findOne({ email });
//       if (existingTutor) {
//         return res.status(400).json({ success: false, message: "Email already registered" });
//       }

//       // Hash the password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);

//       // Parse address
//       let parsedAddress;
//       try {
//         parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
//       } catch (e) {
//         return res.status(400).json({ success: false, message: "Invalid address format" });
//       }

//       // Upload image to Cloudinary
//       const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//         folder: 'tutors',
//         resource_type: 'auto',
//         allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
//         transformation: [{ quality: 'auto:good', fetch_format: 'auto' }],
//       });

//       // Create tutor object
//       const tutorData = {
//         name,
//         email,
//         image: imageUpload.secure_url,
//         password: hashedPassword,
//         speciality,
//         degree,
//         experience,
//         about,
//         fees: Number(fees),
//         address: parsedAddress,
//         date: Date.now(),
//       };

//       // Save to database
//       const newTutor = new TutorModel(tutorData);
//       await newTutor.save();

//       // Generate JWT token
//       const token = jwt.sign({ id: newTutor._id }, process.env.JWT_SECRET || 'default_secret_key', { expiresIn: '1h' });

//       // Remove the uploaded file from local storage
//       if (fs.existsSync(imageFile.path)) {
//         fs.unlinkSync(imageFile.path);
//       }

//       return res.status(201).json({
//         success: true,
//         message: "Tutor registered successfully",
//         token,
//         tutor: {
//           name: newTutor.name,
//           email: newTutor.email,
//           image: newTutor.image,
//           speciality: newTutor.speciality,
//           degree: newTutor.degree,
//           experience: newTutor.experience,
//           about: newTutor.about,
//           fees: newTutor.fees,
//           address: newTutor.address,
//         },
//       });
//     } catch (error) {
//       console.error("Error in addTutor:", error);

//       // Remove uploaded file on error
//       if (req.file && fs.existsSync(req.file.path)) {
//         fs.unlinkSync(req.file.path);
//       }

//       return res.status(500).json({ success: false, message: "Internal server error. Please try again later." });
//     }
//   };


const addTutor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
    const imageFile = req.file;

    // Validate required fields
    if (!imageFile) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = 'uploads';
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }

    // Additional validation for address
    let parsedAddress;
    try {
      parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
    } catch (e) {
      // If address parsing fails, create a default structure
      parsedAddress = {
        line1: address || '',
        line2: ''
      };
    }

    // Upload to Cloudinary with error handling
    let imageUploadResult;
    try {
      imageUploadResult = await cloudinary.uploader.upload(imageFile.path, {
        folder: 'tutors',
        resource_type: 'auto',
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
        transformation: [{ quality: 'auto:good', fetch_format: 'auto' }],
      });
    } catch (uploadError) {
      console.error('Cloudinary upload error:', uploadError);
      return res.status(500).json({ 
        success: false, 
        message: "Error uploading image to cloud storage" 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create tutor object
    const tutorData = {
      name,
      email,
      image: imageUploadResult.secure_url,
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

    // Clean up uploaded file
    fs.unlink(imageFile.path, (err) => {
      if (err) console.error('Error deleting uploaded file:', err);
    });

    // Generate token and send response
    const token = jwt.sign(
      { id: newTutor._id }, 
      process.env.JWT_SECRET || 'default_secret_key', 
      { expiresIn: '1h' }
    );

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
    
    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting uploaded file:', err);
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      message: error.message || "Internal server error. Please try again later." 
    });
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

    const allTutors = async( req,res)=>{
        try{
           const tutors= await TutorModel.find({}).select('-password')
           res.json({success:true,tutors})

         }
           catch(error)
           {
              console.log(error)
              res.json({success:false,message:error.message})
           }
    }


    const tutorList = async (req,res)=>{

      try{
         const tut= await TutorModel.find({}).select(['-email','-password'])
         res.json({success:true,message:tut})

      }
      catch(error)
      {
          console.log(error)
          res.json({success:false,message:error.message})
      }
    }
   
    const getTutorById = async (req, res) => {
      try {
        const { id } = req.params;
    
        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ success: false, message: "Invalid tutor ID" });
        }
    
        const tutor = await TutorModel.findById(id).select("-password");
        if (!tutor) {
          return res.status(404).json({ success: false, message: "Tutor not found" });
        }
    
        res.status(200).json(tutor);
      } catch (error) {
        console.error("Error fetching tutor by ID:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    };

const appointmentsTutor = async (req, res) => {
  try {
    const { tutId } = req.body;
    if (!tutId) {
      return res.status(400).json({ success: false, message: "Tutor ID is required" });
    }

    // Fetch appointments and populate user data
    const appointments = await appointmentModel.find({ tutId })
      .populate('userId', 'name email dob') // Populate user details
      .sort({ date: -1 });
    // Calculate age for each appointment's user
    const appointmentsWithAge = appointments.map(appointment => {
      const dob = appointment.userId?.dob;
      let age = 'N/A';
      
      if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
      }

      return {
        ...appointment.toObject(),
        userData: {
          name: appointment.userId?.name || 'N/A',
          email: appointment.userId?.email || 'N/A',
          age
        }
      };
    });

    res.status(200).json({ success: true, appointments: appointmentsWithAge });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
const tutorDashboard = async(req,res)=>{
  try{
    const {tutId} = req.body
    const appointments = await appointmentModel.find({tutId})
      .populate('tutId', 'name image')
      .populate('userId', 'name') // Add this line to populate user details

    let earnings = 0
    appointments.map((item)=>{
     if(item.isCompleted || item.payment)
     {
        earnings+=item.amount
     }
    })

    let patients = []
    appointments.map((item)=>{
       if(!patients.includes(item.userId))
       {
         patients.push(item.userId)
       }
    })

    // Map appointments to include all required data
    const appointmentsWithData = appointments.map(item => ({
      ...item.toObject(),
      tutorData: {
        name: item.tutId?.name || 'N/A',
        image: item.tutId?.image || null
      },
      userData: {
        name: item.userId?.name || 'N/A'
      },
      bookingDateTime: item.slotDate ? new Date(item.slotDate) : null,
      paymentStatus: item.payment ? 'Paid' : 'Pending'
    }));
    const dashData={
     earnings,
     appointments: appointments.length,
     patients: patients.length,
     latestAppointments: appointmentsWithData.reverse().slice(0,5)
    }
    res.json({success:true, dashData})
  } 
  catch(error)
  {
     console.log(error);
     res.json({success:false, message:error.message})
  }
}
// api to get doctor profile for tutor panel
const tutorProfile = async(req, res)=>{
  try{
     const {tutId} =  req.body
     const profileData = await TutorModel.findById(tutId).select('-password')
     
     res.json({success:true,profileData})
  }
  catch(error)
  {
    console.log(error);
    res.json({success:false, message:error.message})
  }
}
// api to update tutor profile data from tutor panel
const updateTutorProfile = async (req,res)=>{
  try{
     const {tutId,fees,address,available} = req.body
     await TutorModel.findByIdAndUpdate(tutId,{fees,address,available})
     res.json({success:true,message:"Profile updated"})
  }
  catch(error)
  {
    console.log(error);
    res.json({success:false, message:'Profile updated'})
  }
}
  export { addTutor , loginTutor,allTutors, tutorList,getTutorById, appointmentsTutor, tutorDashboard,tutorProfile,updateTutorProfile};


