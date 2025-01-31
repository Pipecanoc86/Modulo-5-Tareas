import fs from 'fs';

let arraynumeros = [];
for (let i = 1; i <= 1000; i++) {
    arraynumeros+= i;
    if (i < 1000) arraynumeros += ',';
}
//console.log("[",arraynumeros,"]");
fs.writeFile('numeros.txt', arraynumeros, (error) => {
    if (error) {
        console.error('Error al escribir el archivo:', error);
        return;
    }
    console.log('Archivo numeros.txt generado correctamente.');
});


