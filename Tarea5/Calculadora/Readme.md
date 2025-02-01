# Calculadora en Node.js

Este proyecto es una calculadora de línea de comandos desarrollada en Node.js. Permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.

## Instalación

Asegúrate de tener Node.js instalado en tu sistema.

Clona o descarga el archivo calculadora.js.

Ubícate en la carpeta donde está el archivo calculadora.js usando la terminal.

## Uso

Ejecuta el siguiente comando en la terminal:

node calculadora.js < num1 >< operacion >< num2 >
<h4>Por ejemplo</h4>
node calculadora.js 5 (+,-,*,/) 2

#### Donde:

< num1 > es el primer número.

< operacion > es la operación a realizar (+, -, *, /).

< num2 > es el segundo número.

## Ejemplos

#### Suma:

node calculadora.js 5 + 3

#### Salida:

Resultado: 8

#### Resta:

node calculadora.js 20 - 8

#### Salida:

Resultado: 12

#### Multiplicacion:

node calculadora.js 4 * 8

#### Salida:

Resultado: 32

#### División:

node calculadora.js 10 / 2

#### Salida:

Resultado: 5

#### Error por división entre cero:

node calculadora.js 10 / 0

#### Salida:

Resultado: Error: División por cero

#### Error por operador no válido:

node calculadora.js 10 % 3

#### Salida:

Resultado: Error: Operación no válida

## Notas

1) Asegúrate de ingresar números válidos, de lo contrario, el programa mostrará un error.

2) Solo se admiten los operadores +, -, * y /.

#### Licencia

Este proyecto es de uso libre y puedes modificarlo según tus necesidades.