import Express from "express"
import cors from "cors"
import gastoroutes from "./routes/gasto.routes.js";
import useroutes from "./routes/user.routes.js";
import mongoconnet from "./config/db.js";
import cookieParser from "cookie-parser";
import { port } from "./config/config.js";

const app=Express();
//conexión a la bd
mongoconnet();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(Express.json());






app.use('/gastapp',useroutes);
app.use('/gastapp',gastoroutes);


app.listen(port,()=>{
    console.log("Servidor iniciado en el puerto "+3001)
})