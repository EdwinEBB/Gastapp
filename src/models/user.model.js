import mongoose from "mongoose";
import {hashPassword} from "../middlewares/Haspassword.js"

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

hashPassword(userschema)
const usermodel=mongoose.model('user',userschema);

export default usermodel;