import productoDB from './producto.json' with {type: 'json'};

export const getAllProducts = () =>{
    return productoDB;
}       

export const getProductbyId = (req,res) =>{
    const {id} =req.params;
    const parseId = Number(id);
    if(!isNaN(parseId)){
        const resultado = productoDB.find(({id})=>{
            return id===parseId;
        })
        if(resultado){
            res.json(resultado);
        }else{
            res.status(404).json('Not Found')
        }
    }else{
        return res.status(400).json('Bad request')
    }
}       

export const postAllProducts = (req,res) =>{
    productoDB.push(req.body);
    res.status(201).json(req.body)
}

export const putProducts = (req,res) =>{
    const {id} = req.params;
    const parseId = Number(id);
    if(isNaN(parseId)){
        res.status(400).json({
            message: 'El id no existe'
        });
    }
    const index = productoDB.findIndex(({id})=>{
        return id ===parseId;
    });
    if(index===-1){
        res.status(404).json('Not found')
    }
    const data = req.body 
    productoDB[index]={id:parseId,...data}
    res.status(201).json({message:'El Producto fue actualizado correctamente'})
}

export const deletProductsbyID = (req,res) =>{
    const {id} = req.params;
    const parseId = Number(id);
    if(isNaN(parseId)){
        res.status(400).json({
            message: 'El id no existe'
        });
    }
    const index = productoDB.findIndex(({id})=>{
        return id ===parseId;
    });
    if(index===-1){
        res.status(404).json('Not found')
    }
    productoDB.splice(index,1);
    res.json({message:'Producto eliminado correctamente'})
}

export const getProductsDisponibles = () =>{
    const productDisponibles = productoDB.filter(({disponible})=>{
        return disponible===true;
    })
    return productDisponibles;
}