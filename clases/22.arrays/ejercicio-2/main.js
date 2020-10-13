/**

 Genera un array con al menos 10 datos de diferentes tipos.
 Tu script debe dar los siguientes outputs:

 1. La suma de todos los valores numéricos
 2. Un nuevo array con todos los datos no numéricos


 * @type {(string|number)[]}
 */

let data = ["auto", 1, 5, "rojo", "verde", 5, 11, "casa", 2];
let no_number = [];
let sum = 0;

for (let i = 0; i < data.length; i++){
    if(typeof data[i] === "number"){
        sum += data[i];
    } else {
        no_number.push(data[i]);
    }
}

("Resultado de la suma: " + sum);
console.log("Datos no numéricos: " + no_number);
