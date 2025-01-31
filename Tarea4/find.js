import fs from 'fs';

fs.readFile('numeros.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo', error);
    return;
  }

  const numbers = data.includes(',') ? data.split(',') : data.split('\n');
  const evenNumbers = numbers.map(Number).filter(num => num % 2 === 0);
  console.log("Números pares del arreglo: ",evenNumbers);
});

