import { generarTK } from "../middlewares/Tokengenerador.js";
import usermodel from "../models/user.model.js"
import bcrytp from "bcrypt"

export const registerUser= async(req,res)=>{
    const {username,name,password}=req.body;
    try {
        
        const existU=await usermodel.findOne({username});
        if(existU){
            return res.status(400).json({message:'El usuario Ya existe'})
        }

        //Encriptar contraseña
        const salt=await bcrytp.genSalt(10);
        const hashedpassword= await bcrytp.hash(password,salt)
        
        //guardar usuario
        const newUser=new usermodel({
            username,
            name,
            password:hashedpassword
        })

        await newUser.save();
        res.status(201).json({message:"Usuario registrado"})

    } catch (error) {
        res.status(500).json({message:"Error interno",error:error.message})
    }
}

export const LoginUser= async(req,res)=>{
    const {username,password}=req.body;

    try {
        const user=await usermodel.findOne({username});
        if(!user){
            return res.status(401).json({message:"Username incorrecto"})
        }

        const iscorrect=await bcrytp.compare(password,user.password);
        if(!iscorrect){
            return res.status(401).json({message:"Contraseña incorrecta"})
        }

        const TK=generarTK(user);

        //Devolver usuario con token
        res.status(200).json({TK,message:"Inicio de sesión exitoso"})

    } catch (error) {
        res.status(500).json({message:"Error interno",error:error.message})
    }
}

export const LogoutUser=(req,res)=>{
    res.status(200).json({message:'Sesión cerrada con exito'})
}