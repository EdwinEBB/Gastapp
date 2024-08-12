import gastomodel from "../models/gasto.model.js";

export const allgastos=async(req,res)=>{
    const {userId}=req.query;


    try {
        //Buscar todos los datos asociados con el usuario
        const gastos=await gastomodel.find({userId});
        res.status(200).json(gastos)
    } catch (error) {
        res.status(500).json({message:"Error interno",error:error.message})
    }
}

export const creategasto=async(req,res)=>{
    const {monto,categoria,descripcion,userId}=req.body;

    try {
        const newgasto= new gastomodel({
            monto,
            categoria,
            descripcion,
            userid
        });

        await newgasto.save();
        res.status(201).json({message:"Gasto creado con exito",gasto:newgasto});
    } catch (error) {
        res.status(500).json({message:"Error interno",error:error.message})
    }
}

export const updategasto=async (req,res)=>{
    const {id}=req.params;
    const {monto,categoria,descripcion}=req.body;

    try {
        const updategasto= await gastomodel.findByIdAndUpdate(id,
            {monto,categoria,descripcion},
            {new:true}//Lo devuelve el nuevo documento
        )

        if(!updategasto){
            res.status(404).json({message:"Gasto no encontrado"})
        }

        res.status(200).json({message:"Gasto actualizado",gasto:updategasto})
    } catch (error) {
        res.status(500).json({message:"Error interno",error:error.message})
    }
}


export const deletegasto=async(req,res)=>{
    const {id}=req.params;

    try {
        const borrargasto=await gastomodel.findByIdAndDelete(id);

        if(!borrargasto){
            res.status(404).json({message:"Usuario no encontrado"})
        }

        res.status(200).json({message:"Gasto eliminado"})
    } catch (error) {
        res.status(500).json({message:"Error interno", error:error.message})
    }
}