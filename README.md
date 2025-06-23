# Instrucciones de Instalación y Uso de la API

## Instalación de dependencias

```bash
npm install express
```

## Cómo ejecutar la API
    npm install
    npm run dev //Ejecutar sin establecer una avariable de entorno
    set PORT=4000 && npm run dev //Ejecutar estableciendo una avariable de entorno

## Esta api rest cuenta con las rutas siguientes
productoRoute.get('/', prductoController.productAll); // Todos los productos
productoRoute.get('/disponibles', prductoController.productFiltrados); // Disponibles
productoRoute.get('/:id', prductoController.porductbyID); // Por ID
productoRoute.post('/', prductoController.porductAllpost); // Crear
productoRoute.put('/:id', prductoController.porductbyIDput); // Actualizar
productoRoute.delete('/:id', prductoController.porductbyIDdelete); // Eliminar


