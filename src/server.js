import Express from "express"
import cors from "cors"
import gastoroutes from "./routes/gasto.routes.js";
import useroutes from "./routes/user.routes.js";
import mongoconnet from "./config/db.js";

const app=Express();

//conexión a la bd
mongoconnet();

//middlewares
app.use(cors());
app.use(Express.json());



app.use('/gastapp',gastoroutes,useroutes)


app.listen(3001,()=>{
    console.log("Servidor iniciado en el puerto "+3001)
})