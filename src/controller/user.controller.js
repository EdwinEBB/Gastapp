import { comparar, encript } from "../middlewares/haspassword.js";
import { generarTK } from "../middlewares/Tokengenerador.js";
import usermodel from "../models/user.model.js"


export const registerUser= async(req,res)=>{
    const {username,name,password}=req.body;
    try {
        
        const existU=await usermodel.findOne({username});
        if(existU){
            return res.status(400).json({message:'El usuario Ya existe'})
        }

        //Encriptar contraseña
        const contraencripta= await encript(password);        
        //guardar usuario
        const newUser=new usermodel({
            username,
            name,
            password:contraencripta
        })

        await newUser.save();
        console.log(newUser);
        res.status(201).json({message:"Usuario registrado"})
        

    } catch (error) {
        res.status(500).json({message:"Error interno",error:error.message})
    }
}

export const LoginUser= async(req,res)=>{
    const {username,password}=req.body;

    try {
        const userxis=await usermodel.findOne({username});
        if(!userxis){
            return res.status(401).json({message:"Username incorrecto"})
        }

        const checkcontra= await comparar(password, userxis.password)
        if(!checkcontra){
            return res.status(401).json({message:"Contraseña incorrecta"})
        }

        const TK=generarTK(userxis);
        res.cookie('Access_TK',TK)
        //Devolver usuario con token
        res.status(200).json({TK,message:"Inicio de sesión exitoso"})

    } catch (error) {
        res.status(500).json({message:"Error interno",error:error.message})
    }
}

export const LogoutUser=(req,res)=>{
    res.cookie('Access_TK',"",{
        expires:new Date(0)
      })
      return res.status(200).json({message:"Chao muchacho"})
}