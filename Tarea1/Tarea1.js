//Ejercicio 1 - Tarea 1 ********************************************************************************************************************

let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

console.log(libros);// Imprima el arreglo de libros
console.log((libros[1].titulo)+" -",(libros[1].autor)); // Imprima el segundo libro sin imprimir paginas
libros[0].paginas=350; // Actualice el elemento paginas del primer libro
console.log(libros[0]); // Imprima el primer libro actualizado
  
     const newArray=libros.map(({titulo,autor})=>({titulo,autor})); // mapeo de libros sin el objeto paginas
    console.log(newArray); //Imprimir en consola el nuevo arreglo sin el objeto paginas

  //Ejercicio 2 - Tarea 1 *****************************************************************************************************************

  const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];
console.log(estudiantes);//Imprima en consola el arreglo de estudiantes
const edadesestudiantes=estudiantes.map(element=>element.edad); // Mapeo de las edades de los estudiantes en un nuevo arreglo
console.log(edadesestudiantes); // Imprimir en consola el nuevo arreglo de edades de los estudiantes 
let sumaEdades=0;
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}
console.log("Suma Edad Estudiantes: ",sumaEdades); // Imprimir la suma de las edades de todos los estudiantes

promedio=(sumaEdades/edadesestudiantes.length); // Calculo del promedio de las edades de los estudiantes
console.log("Promedio de edad estudiantes: ",promedio); // Imprimir en consola el promedio de las edades de los estudiantes

//Ejercicio 3 - Tarea 1  ****************************************************************************************************************

let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

console.log(productos);

let productosdeRopa = productos.filter(element=> element.categoria === "Ropa"); // Filtrar el arreglo de productos con los productos que tengan ropa.

console.log(productosdeRopa);//Imprimir en consola los productos que tengan "Ropa"

let preciosMayores = productos.filter(element=>element.precio>30);//Filtrar el arreglo de productos con los productos que tengan un precio mayor a 30

console.log(preciosMayores);//Imprimir en consola los productos que tengan precio mayor a 30