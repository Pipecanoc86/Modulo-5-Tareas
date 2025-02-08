### MANEJO DE METODOS (GET,POST) EN LA CREACION DE APIS (Tarea 6)
## Descripción

Este programa crea un servidor HTTP en Node.js sin usar Express. Permite realizar operaciones CRUD básicas en una lista de productos, específicamente:

* Obtener todos los productos (GET /products)

* Obtener un producto por ID (GET /products/:id)

* Agregar un nuevo producto (POST /add)

## Instalación

Asegúrate de tener Node.js instalado en tu sistema.

Ejecuta el servidor con el siguiente comando:

node index.js

## Uso

* #### Obtener todos los productos: 
        Realiza una solicitud GET a:   http://localhost:3002/products

 * #### Obtener un producto por ID

        Realiza una solicitud GET a:   http://localhost:3002/products/id

        Ejemplo para obtener el producto con id=2:   http://localhost:3002/products/2

* #### Agregar un nuevo producto

        Realiza una solicitud POST a http://localhost:3002/add con el siguiente formato JSON en el cuerpo:

{
  "name": "Carro",
  "price": 100,
  "category": "Cars"
}

#### Respuestas esperadas

* GET /products devuelve un listado de productos.

* GET /products/:id devuelve un solo producto si existe o un mensaje de error.

* POST /add agrega un nuevo producto y devuelve la información del producto agregado.

Nota: Si hay un error en el formato del JSON, el servidor devolverá un código 400 con un mensaje de error.

