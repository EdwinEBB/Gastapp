import mongoose from "mongoose";

const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const usermodel=mongoose.model('user',userschema);

export default usermodel;