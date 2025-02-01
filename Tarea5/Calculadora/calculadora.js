const datos = process.argv.slice(2)

if(datos.length !== 3){
    console.log("Uso: node calculadora.js <num1> <operacion> <num2>");
    console.log("Uso: node calculadora.js <num1> <+,-,*,/> <num2>");
    console.log("Ejemplo: node calculadora.js 5 (+,-,*,/)10")
    process.exit(1)
}

const [num1, operacion, num2] = datos;
const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
    console.error("Error: Ingresa dos números válidos.");
    process.exit(1);
}
const calculadora = (a, operacion, b) => {
    switch (operacion) {
        case ('+'):
            return a + b;
        case ('-'):
            return a - b;
        case ('*'):
            return a * b;
        case ('/'):
            return b !== 0 ? a / b : "Error: División por cero";
        default:
            return "Error: Operación no válida";
    }
}

const resultado = calculadora(a, operacion, b);
console.log("Resultado: ",resultado);
