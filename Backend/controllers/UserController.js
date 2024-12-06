import validator from 'validator'
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import jwt from 'jsonwebtoken'
const addUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body
       if(!name||!password||!email)
       {
        return res.json({success:false,message:"Missing Details"})
       }
       if(!validator.isEmail(email))
       {
        return res.json({success:false,message:"enter a valid email"})
       }
       if(password.length<8)
       {
        return res.json({success:false,message:"enter a strong password"})
       }

       const salt=await bcrypt.genSalt(10);
       const hashedPassword=await bcrypt.hash(password,salt)
       const userData={
        name,
        email,password:hashedPassword
       }
       const newUser=new UserModel(userData);
       const user=await newUser.save();


       const secretKey = process.env.JWT_SECRET || 'default_secret_key';
       const token = jwt.sign({ id: user._id }, secretKey);

    //    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
       res.json({success:true,token})

    }
    catch(error)
    {
        res.json({success:false,message:error.message})
    }
}


const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email})
        if(!user)
        {
            res.json({success:false,message:'user does not exist'})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(isMatch)
        {
            const secretKey = process.env.JWT_SECRET || 'default_secret_key';
            const token = jwt.sign({ id: user._id }, secretKey);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Wrong username or password"})
        }
    }
    catch(error)
    {
        res.json({success:false,message:error.message})
    }
}
export {addUser,loginUser}