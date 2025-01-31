import fs from 'fs';

fs.readFile('numeros.txt', 'utf8', (error, data) => {
  if (error) {
    console.log('Error al leer el archivo', error);
    return;
  }

  const numeros = data.toString().split(',').map(Number);
  console.log("Numeros : ",numeros);
  const numerospares = numeros.filter(num => num % 2 === 0);
  console.log("Números pares son: ",numerospares);
});


