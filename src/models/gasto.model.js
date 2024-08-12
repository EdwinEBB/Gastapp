import mongoose from "mongoose";

const gastoschema=new mongoose.Schema({
    monto:{
        type:Number,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    fecha:{
        type:Date,
        default:Date.now
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
})

const gastomodel=mongoose.model('gastos',gastoschema);

export default gastomodel;