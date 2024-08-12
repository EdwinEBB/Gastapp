import Express from "express"
import { allgastos, creategasto, deletegasto, updategasto } from "../controller/gastos.controller.js";

const gastoroutes=Express.Router();

gastoroutes.get('/gastos/allgasto',allgastos);
gastoroutes.post('/gastos/creargasto',creategasto);
gastoroutes.put('/gastos/updategasto/:id',updategasto);
gastoroutes.delete('/gastos/deletegasto/:id',deletegasto)


export default gastoroutes;