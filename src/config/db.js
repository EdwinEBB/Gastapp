import mongoose from "mongoose";

const mongoconnet=async()=>{
    try {
        
        await mongoose.connect('mongodb+srv://ebayuelobello:18092003EBB$@gastos.pn3of.mongodb.net/?retryWrites=true&w=majority&appName=Gastos')
        console.log("Conexión a base de datos lista")

    } catch (error) {
        console.log("No se puedo",error.message);
        process.exit(1);
    }
}

export default mongoconnet;