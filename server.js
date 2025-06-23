import express from 'express';
import productoRoute from './router/producto.routes.js';

const app = express();

app.use(express.json());
app.use('/Productos',productoRoute);

const port = process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto http://localhost:${port}/productos`);
})