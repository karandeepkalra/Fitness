import mongoose from "mongoose";

const appointmentSchema=new mongoose.Schema({
    // userId:{type:String,required:true},
    // tutId:{type:String,required:true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  // Make sure this references your User model
        required: true
      },
      tutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tutors',
        required: true
      },
    slotDate:{type:String,required:true},
    slotTime:{type:String,required:true},
    userData:{type:Object,required:true},
    tutData:{type:Object,required:true},
    amount:{type:Number,required:true},
    date:{type:Number,required:true},
    cancelled:{type:Boolean,default:false},
    payment:{type:Boolean,default:false},
    isCompleted:{type:Boolean,default:false}
})


const appointmentModel=mongoose.models.appointment||mongoose.model('appointment',appointmentSchema)
export default appointmentModel