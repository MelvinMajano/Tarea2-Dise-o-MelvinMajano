import { Router } from "express";
import prductoController from "../controller/producto.controller.js";

const productoRoute = Router();

productoRoute.get('/',prductoController.productAll);
productoRoute.get('/disponibles',prductoController.productFiltrados);
productoRoute.get('/:id',prductoController.porductbyID);
productoRoute.post('/',prductoController.porductAllpost);
productoRoute.put('/:id',prductoController.porductbyIDput);
productoRoute.delete('/:id',prductoController.porductbyIDdelete);

export default productoRoute;