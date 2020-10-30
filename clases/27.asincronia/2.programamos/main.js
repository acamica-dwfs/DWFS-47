/**
 *
 Hemos realizado las acciones de sumar y restar mediante un callback.
 Es momento de añadir las funciones de multiplicar y dividir.
 Luego, añade el promedio de ambos utilizando una función inline.
 */

let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let mult = (n1, n2) => n1 * n2;
let div = (n1, n2) => n1 / n2;

let calculadora = function (n1, n2, callback){
    return callback(n1, n2);
};

console.log(calculadora(7, 7, mult));
console.log(calculadora(7, 7, suma));
console.log(calculadora(7, 7, div));
console.log(calculadora(7, 7, resta));
