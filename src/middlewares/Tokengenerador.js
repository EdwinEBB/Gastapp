import jwt from "jsonwebtoken"

const JWT_SECRET="m_y_secret_key_*_$"

export const generarTK=(user)=>{
    return jwt.sign(
        {userID:user._id, username:user.username,},
        JWT_SECRET,
        {expiresIn:'1h'}
    )
}