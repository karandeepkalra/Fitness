import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import TutorModel from "../models/TutorModel.js"
import fs from 'fs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const addTutor = async(req, res) => {
    try {
        // Extract data from request
        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
        const imageFile = req.file;
        
        // Input validation
        if (!imageFile) {
            return res.status(400).json({
                success: false, 
                message: "Image file is required"
            });
        }

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({
                success: false, 
                message: "Missing details"
            });
        }

        if(!validator.isEmail(email)) {
            return res.status(400).json({
                success: false, 
                message: "Please enter valid email"
            });
        }

        if(password.length < 8) {
            return res.status(400).json({
                success: false, 
                message: "Please enter a strong password"
            });
        }

        // Check if email already exists
        const existingTutor = await TutorModel.findOne({ email });
        if (existingTutor) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Parse address
        let parsedAddress;
        try {
            parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
        } catch (e) {
            return res.status(400).json({
                success: false, 
                message: "Invalid address format"
            });
        }

        try {
            // Check if collection exists and is accessible
            const db = mongoose.connection.db;
            const collections = await db.listCollections({ name: 'tutors' }).toArray();
            
            if (collections.length === 0) {
                await db.createCollection('tutors');
                console.log("'tutors' collection created");
            }

            // Upload to Cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
                folder: 'tutors',
                resource_type: 'auto',
                allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
                transformation: [{
                    quality: 'auto:good',
                    fetch_format: 'auto'
                }]
            });

            // Create tutor data
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
                date: Date.now()
            };

            // Save to database
            const newTutor = new TutorModel(tutorData);
            await newTutor.save();

            // Clean up temporary file
            if (fs.existsSync(imageFile.path)) {
                fs.unlinkSync(imageFile.path);
            }

            return res.status(201).json({
                success: true, 
                message: "Tutor added successfully",
                tutor: {
                    name: newTutor.name,
                    email: newTutor.email,
                    image: newTutor.image,
                    speciality: newTutor.speciality,
                    degree: newTutor.degree,
                    experience: newTutor.experience,
                    about: newTutor.about,
                    fees: newTutor.fees,
                    address: newTutor.address
                }
            });

        } catch (uploadError) {
            console.error('Operation error:', uploadError);
            
            // Clean up temporary file if it exists
            if (fs.existsSync(imageFile.path)) {
                fs.unlinkSync(imageFile.path);
            }

            if (uploadError.message.includes('Invalid namespace')) {
                return res.status(500).json({
                    success: false,
                    message: "Database configuration error. Please contact administrator."
                });
            }

            return res.status(500).json({
                success: false, 
                message: `Operation failed: ${uploadError.message}`
            });
        }

    } catch (error) {
        console.error("Error in addTutor:", error);
        
        // Clean up temporary file if it exists
        if (imageFile && fs.existsSync(imageFile.path)) {
            fs.unlinkSync(imageFile.path);
        }

        return res.status(500).json({
            success: false, 
            message: "Internal server error. Please try again later."
        });
    }
};

// api for admin login
const loginAdmin= async (req,res)=>{
    try{
        const {email,password}= req.body
        if(email==process.env.ADMIN_EMAIL && password==process.env.ADMIN_PASSWORD)
        {
             const token= jwt.sign(email+password, process.env.JWT_SECRET)
             res.json({success:true,token})
        }
        else
        {
            res.josn({success:false,message:"Invalid credentials "})
        }
    }
    catch(error)
    {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// Export all controller functions
export { addTutor , loginAdmin};