import mongoose from "mongoose";
import { Cluster } from "./config.js";

const uri=process.env.Cluster;

const mongoconnet=async()=>{
    try {
        
        await mongoose.connect(Cluster)
        console.log("Conexión a base de datos lista")

    } catch (error) {
        console.log("No se puedo",error.message);
        process.exit(1);
    }
}

export default mongoconnet;