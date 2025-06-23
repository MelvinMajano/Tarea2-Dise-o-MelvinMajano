import { deletProductsbyID, getAllProducts, getProductbyId, getProductsDisponibles, postAllProducts, putProducts } from "../model/producto.model.js";

export default class prductoController {
    static productAll =(req,res)=>{
        const products= getAllProducts();
        res.json(products);
    }

    static porductbyID =(req,res)=>getProductbyId(req,res);

    static porductAllpost =(req,res)=>{
        const {nombre,precio,descripcion} = req.body;
        if(!nombre){
            res.status(400).json({message:'El nombre es obligatorio'})
        }
        if(precio<=0){
            res.status(400).json({message:'El precio debe ser un número positivo mayor a cero'})
        }
        if(descripcion.trim().length>10){
            res.status(400).json({message:'La descripcion debe tener un mínimo de 10 caracteres sin espacios al inicio y al final'})
        }
        postAllProducts(req,res);
    };

    static porductbyIDput =(req,res)=>{
        const {nombre,precio,descripcion} = req.body;
        if(!nombre){
            res.status(400).json({message:'El nombre es obligatorio'})
        }
        if(precio<=0){
            res.status(400).json({message:'El precio debe ser un número positivo mayor a cero'})
        }
        if(descripcion.trim().length>10){
            res.status(400).json({message:'La descripcion debe tener un mínimo de 10 caracteres sin espacios al inicio y al final'})
        }
        putProducts(req,res);
    };

    static porductbyIDdelete =(req,res)=>deletProductsbyID(req,res);

    static productFiltrados =(req,res)=>{
        const products= getProductsDisponibles();
        res.json(products);
    }
}