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
## 📚 Rutas disponibles

| Método  | Ruta             | Descripción                        |
| ------- | ---------------- | ---------------------------------- |
| GET     | `/`              | Todos los productos                |
| GET     | `/disponibles`   | Productos disponibles              |
| GET     | `/:id`           | Producto por ID                    |
| POST    | `/`              | Crear producto                     |
| PUT     | `/:id`           | Actualizar producto                |
| DELETE  | `/:id`           | Eliminar producto                  |


