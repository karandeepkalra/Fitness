import validator from 'validator';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

// Add User (Sign Up)
const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !password || !email) {
            return res.json({ success: false, message: "Missing Details" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword
        };

        const newUser = new UserModel(userData);
        const user = await newUser.save();

        const secretKey = process.env.JWT_SECRET || 'default_secret_key';
        const token = jwt.sign({ id: user._id }, secretKey);

        return res.json({ success: true, token });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User does not exist' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const secretKey = process.env.JWT_SECRET || 'default_secret_key';
            const token = jwt.sign({ id: user._id }, secretKey);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Wrong username or password" });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
// const getProfile = async (req, res) => {
//     try {
//         console.log("Headers:", req.headers);

//         const token = req.headers.authorization?.split(" ")[1];
//         console.log("Extracted Token:", token);

//         if (!token) {
//             return res.status(401).json({ success: false, message: "Login again: Token missing" });
//         }

//         const secretKey = process.env.JWT_SECRET || 'default_secret_key';
//         const decoded = jwt.verify(token, secretKey);

//         console.log("Decoded Token:", decoded);

//         const userId = decoded.id;
//         const userData = await UserModel.findById(userId).select('-password');

//         if (!userData) {
//             return res.json({ success: false, message: "User not found" });
//         }

//         res.json({ success: true, userData });
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// };



const getProfile = async (req, res) => {
    try {
        // No need to extract and verify token again
        const userId = req.user.id;  // Access the user info directly from req.user
        const userData = await UserModel.findById(userId).select('-password');

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, userData });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, dob, gender } = req.body;

        // Validate input
        if (!userId || !name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" });
        }

        // Update user data
        const result = await UserModel.findByIdAndUpdate(
            userId,
            { name, phone, dob, gender },
            { new: true } // To return the updated document
        );

        if (!result) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "Profile updated successfully", data: result });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export { addUser, loginUser,getProfile,updateProfile };
