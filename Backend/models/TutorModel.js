import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the Tutor schema
const TutorSchema = new Schema({
  name: { type: String, required: true },
  email:{type:String, required:true},
  password:{type:String, required:true},
  image:{type:String, required:true},
  speciality: { type: String, required: true },
  degree:{type:String, required:true},
  experience: { type: String, required: true },
  about: { type: String, required: true },
  available: { type: Boolean, default: true },
  fees: { type: Number, required: true },
  address: { type: Object, required: true },
  date: { type: Number, required: true },
 slots_booked:{type:Object, default:{}}
}, {minimize:false})

// Create the Tutor model
const TutorModel = mongoose.models.tutors || mongoose.model('tutors', TutorSchema);

export default TutorModel;
