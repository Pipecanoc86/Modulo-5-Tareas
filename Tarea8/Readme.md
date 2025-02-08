# Creacion de API Students

Este proyecto vamos a crear un API  simple construida con Node.js y Express que gestiona un registro de estudiantes almacenado en un archivo JSON como base de datos.

##  Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado:
- Node.js
- npm 

##  Instalación

1. Clona el repositorio o descarga el código fuente.

        git clone https://github.com/tu-repositorio.git

2. Accede a la carpeta del proyecto.

        cd nombre-del-proyecto

3. Instala las dependencias necesarias.

    * npm install
    * npm install nodemon
    * npm install express 

##  Como lo Usamos?

### Iniciar el servidor

Ejecuta el siguiente comando en consola (powershell o bash) para iniciar el servidor:

    npm run watch

    El servidor se ejecutará en el puerto 3002  con el mensaje: Server is running on port 3002

### Abrir el Postman 

Ejecutar en el postman la siguiente url:  http://localhost:3002 y ahi probamos los diferentes metodos (GET, POST, PUT y DELETE)

### Endpoints

### 1. Obtener mensaje de prueba

    GET / 

**Respuesta:** "Prueba de GET sin path"

### 2. Obtener todos los estudiantes

    GET /students

**Respuesta exitosa:** 

    {
        "status": 200,
        "message": "Students fetched successfully",
        "data": 
        [
            {
                "id": 1,
                "name": "Alice",
                "age": 20,
                "major": "Computer Science"
            },
            {
                "id": 2,
                "name": "Bob",
                "age": 22,
                "major": "Mathematics"
            },
            {
                "id": 3,
                "name": "Charlie",
                "age": 21,
                "major": "Physics"
            }
        ]
    }

### 3. Obtener un estudiante por ID

    GET /students/:id , por ejemplo GET/students/2

 **Respuesta exitosa:**

    {
        "status": 200,
        "message": "Student fetched successfully",
        "data": {
            "id": 2,
            "name": "Bob",
            "age": 22,
            "major": "Mathematics"
        }
    }
**Si el estudiante no existe:**

    {
        "status": 404,
        "message": "Student not found"
    }

### 4. Agregar un estudiante

    POST /students

Y en el body del postman colocamos la informacion del estudiante nuevo que desamos agregar. El sistema nos asigna un ID nuevo por cada estudiante que se agregue. 

Por ejemplo en el body colocamos esto :

    {
        "name": "Felipe",
        "age": 38,
        "major": "Soccer player"
    }
 
**Respuesta exitosa:**

    {
        "status": 201,
        "message": "Student created successfully",
        "data": {
            "id": 4,
            "name": "Felipe",
            "age": 38,
            "major": "Soccer Player"
        }
    }

### 5. Editar un estudiante

    PUT /students/:id , por ejemplo PUT/students/2

Donde id=2 es el estudiante sobre el cual vamos a editar informacion y en el body del postman colocamos la informacion que se desea cambiar.
Por ejemplo en el body colocamos esto :

    {
        "name": "Katy",
        "age": 40,
        "major": "Singer"
    }
 
**Respuesta exitosa:**

    {
    "status": 200,
    "message": "Student updated successfully",
    "data": {
        "id": 2,
        "name": "Kathy",
        "age": 45,
        "major": "Singer"
    }
}

### 6. Eliminar un estudiante por ID

    DELETE /students/:id , por ejemplo DELELE/students/2

 **Respuesta exitosa:**
    
    {
        "status": 200,
        "message": "Student deleted successfully"
    }
        
        
    

 **Si el estudiante no existe:**

    {
        "status": 404,
        "message": "Student not found"
    }


## Notas
- La base de datos de estudiantes se almacena en el archivo `students.json`.
- Se recomienda usar herramientas como Postman

## Tecnologías usadas
- Node.js
- Express
- File System (fs) para manejar la base de datos JSON

## Licencia
Este proyecto no tiene licencia y es de codigo abierto. Lo puedes usar y aprender 

