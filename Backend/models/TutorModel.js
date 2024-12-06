




import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the Tutor schema
const TutorSchema = new Schema({
  name: { type: String, required: true },
  speciality: { type: String, required: true },
  fees: { type: Number, required: true },
});

// Create the Tutor model
const TutorModel = model('Tutor', TutorSchema);

export default TutorModel;
