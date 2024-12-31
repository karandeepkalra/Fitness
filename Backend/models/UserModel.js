import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,require:true},
    password:{type:String,required:true},
    gender:{type:String,default:"Not Selected"},

    // dob:{type:String,default:"Not Selected"},
    dob:{type:Date, default:"Not Selected"},
    phone:{type:String,default:'000000000'}

})

const UserModel=mongoose.model('user',UserSchema)
export default UserModel