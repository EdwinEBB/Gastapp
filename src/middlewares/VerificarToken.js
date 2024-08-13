import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "m_y_secret_key_*_$";

export const authTK = (req, res, next) => {
    // Extraer el token del encabezado Authorization
    const TK = req.cookies.Access_TK;

    if (!TK) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
    }

    try {
        const decoded = jwt.verify(TK, JWT_SECRET);
        req.user = decoded; // Aquí debe ir el usuario y los datos
        next();
    } catch (error) {
        console.error('Error de token:', error); // Muestra el error en caso de fallo
        return res.status(403).json({ message: 'Token inválido o expirado.' });
    }
};
