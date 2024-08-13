import bcrypt from "bcrypt"


export const encript= async(contraplana)=>{
    const hash= await bcrypt.hash(contraplana,10);
    return hash
}

export const comparar= async(contraplana,contraencript)=>{
    return await bcrypt.compare(contraplana,contraencript);
}