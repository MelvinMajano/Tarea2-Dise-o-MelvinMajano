Instrucciones para instalar las dependencias.
    npm i express

Cómo ejecutar la API
    npm install
    npm run dev //Ejecutar sin establecer una avariable de entorno
    set PORT=4000 && npm run dev //Ejecutar estableciendo una avariable de entorno

Esta api rest cuenta con las rutas siguientes
    productoRoute.get('/',prductoController.productAll); //Su funcionalidad es obtener todos los productos
    productoRoute.get('/disponibles',prductoController.productFiltrados); //Su funcionalidad es obtener los productos disponibles
    productoRoute.get('/:id',prductoController.porductbyID); //Su funcionalidad es obtener un producto por id
    productoRoute.post('/',prductoController.porductAllpost); //su funcionalidad es para crear un nuevo producto
    productoRoute.put('/:id',prductoController.porductbyIDput); //su funcionalidad es actualizar un producto en especifico
    productoRoute.delete('/:id',prductoController.porductbyIDdelete); //su funcionalidad es eliminar un producto en especifico


