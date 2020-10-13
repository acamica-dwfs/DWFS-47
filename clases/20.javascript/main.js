//variables - var

//números
var number = 93;
//typeof
//console.log - imprimir mensaje en la consola
//concatenación de strings (+)
console.log("Tipo de 93: " + typeof(number));
console.log(number);

//booleanos
var boolean = true;
console.log("Tipo de true: " + typeof(boolean));
console.log(boolean);

//strings
var string = 'Hola';
console.log("Tipo de 'Hola': " + typeof(string));
console.log(string);
var string2 = '93';
console.log("Tipo de '93': " + typeof(string));
console.log(string2);
var string3 = 'true';
console.log("Tipo de 'true': " + typeof(string));
console.log(string3);

//infinity
var infinity = 5/0;
console.log("Tipo de infinity: " + typeof(infinity));
console.log(infinity);

//conversión de tipo
//a número - parseInt
var string2 = '123';
var string2tonum =  parseInt(string2);
console.log("Valor de '123' pasado a número: " + string2tonum);
var string3 = '123ab';
var string3tonum =  parseInt(string3);
console.log("Valor de '123ab' pasado a número: " + string3tonum);
var string4 = 'ab123';
var string4tonum =  parseInt(string4);
console.log("Valor de 'ab123' pasado a número: " + string4tonum);

//NaN
//isNaN, chequear si algo es NaN
console.log("Es '123' pasado a número NaN: " + isNaN(string2tonum));
console.log("Es '123ab' pasado a número NaN: " + isNaN(string3tonum));
console.log("Es 'ab123' pasado a número NaN: " + isNaN(string4tonum));

//a string toString
var number2 = 93;
console.log("Tipo de 93 pasado a string: " + typeof(number2.toString()));
console.log(number2.toString());
var boolean2 = true;
console.log("Tipo de true pasado a string: " + typeof(boolean2.toString()));
console.log(boolean2.toString());
var infinity2 = 3/0;
console.log("Tipo de infinity pasado a string: " + typeof(boolean2.toString()));
console.log(infinity2.toString());

//confirm
var acceptCond = confirm("Acepta las condiciones de uso?");

//condicionales
//if, else if, else
if (acceptCond === true) {
    console.log("Aceptó");
} else {
    console.log("No aceptó");
}
//operador ternario - mismo codigo abreviado
console.log((acceptCond === true) ? "Aceptó" : "No aceptó");


//operadores aritméticos: +, - , * , /
//conversion implicita ej '3' + 3 = '33'
console.log("4 + 4 = " + 4 + 4);
//una forma de evitarlo
console.log("4 + 4 = " + (4 + 4));
console.log("4 - 4 = " + (4 - 4));
console.log("4 / 4 = " + (4 / 4));
console.log("4 * 4 = " + (4 * 4));

//operadores de comparación: ==, ===, !==, !=, >, <, <=, >=
var num = 7;
if (num < 10) {
    console.log("El número " + num + " es menor a 10");
} else if (num > 10) {
    console.log("El número " + num + "  es mayor a 10");
} else {
    console.log("El número es 10");
}

if (num === '7') {
    console.log("El número " + num + " es igual a '7' en tipo y valor");
} else if (num == '7') {
    console.log("El número " + num + " es igual a '7' en valor y no en tipo");
} else {
    console.log("El número no es ni el número 7, ni la string '7'");
}

//operadores lógicos: &&, ||, !
console.log("false && false = " + false && false);
console.log("false && true = " + false && true);
console.log("true && true = " + true && true);
console.log("false || false = " + false || false);
console.log("false || true = " + false || true);
console.log("true || true = " + true || true);
console.log("!true = " + !true);
console.log("!false = " + !false);

let hour = 12;
let isWeekend = true;
if (hour < 8 || hour > 18 || isWeekend) {
    console.log( 'La escuela está cerrada.' );
} else {
    console.log('La escuela está abierta.');
}

let age = 22;
let hasDNI = true;
if (age >= 18 && hasDNI){
    console.log( 'Puede pasar.' );
} else {
    console.log( 'Lo lamento, no puede pasar.' );
}


//prompt - pedir input al usuario
var name2 = prompt("Ingrese su nombre");

//alert
//String method: .toLowerCase()
alert("Su nombre en minúscula es: " + name2.toLowerCase());
//String method: .toUpperCase()
alert("Su nombre en mayúscula es: " + name2.toUpperCase());




/*let tabla = parseInt(prompt(" deme su numero  a multiplicar"));


// multiplicar ++  -->  multiplicar  = multiplicar  + 1 ;
// multiplicar --  -->  multiplicar  = multiplicar  - 1 ;
// limit inicial ;  condicion de parada ;  incremental
//console.log("tabla del  con  ++" + tabla);
for(let multiplicar =  1 ;   multiplicar <= 10 ; multiplicar  = multiplicar  + 1) {
   // if(multiplicar % 2  === 0) {
        console.log( tabla  + ' x '+  multiplicar + ' = ' +  (tabla * multiplicar) );
        //debugger; // break point
    //}
    //console.log(tabla * multiplicar);
}

console.log("tabla del  con  --" + tabla);
for (let multiplicar =  10 ;  multiplicar >= 1  ; multiplicar --) {
    console.log( tabla  + ' x '+  multiplicar + ' = ' +  (tabla * multiplicar) );
}

// condicion de parada
console.log("tabla del  con  while" + tabla);
let multiplicar =  1;
while ( multiplicar <= 10){
     console.log( tabla  + ' x '+  multiplicar + ' = ' +  (tabla * multiplicar) );
     multiplicar++;
}

console.log("tabla del  con  do while" + tabla);
 multiplicar =  11;
do {
    console.log( tabla  + ' x '+  multiplicar + ' = ' +  (tabla * multiplicar) );
    multiplicar++;
}while (multiplicar <= 10)

**/

//multiplicar();

function multiplicar () {
    let tabla = parseInt(prompt(" deme su numero  a multiplicar"));
    console.log("tabla del  " + tabla);
    for(let multiplicar =  1 ;   multiplicar <= 10 ; multiplicar  = multiplicar  + 1) {
        console.log( tabla  + ' x '+  multiplicar + ' = ' +  (tabla * multiplicar) );
    }
}

// funciones flecha / arrow function
let multi =  () => {
    let tabla = parseInt(prompt(" deme su numero  a multiplicar  v2"));
    console.log("tabla del  " + tabla);
    for(let multiplicar =  1 ;   multiplicar <= 10 ; multiplicar  = multiplicar  + 1) {
        console.log( tabla  + ' x '+  multiplicar + ' = ' +  (tabla * multiplicar) );
    }
}

//multi();

let suma = ( a , b)  => {
    return   a + b;
}
let  restar  = ( a , b)  => {
    return   a - b;
}


/**
 Crear un script que permita ingresar solamente 5 valores
 mediante prompt y nos muestre la suma total de todos los valores ingresados
 */
let sumar =  () => {
    let resultado = 0;
    let numero = 0;
    for (let i  = 1 ; i<= 5 ; i ++) {
        numero =  parseInt(prompt("ingrese un numero"));
        resultado =  numero  + resultado;
    }
    alert("la suma de los numero es" + resultado);
}


let  sumerV2 =  () => {
    let numero1 =   parseInt(prompt("ingrese un numero"));
    let numero2 =   parseInt(prompt("ingrese un numero"));
    let numero3 =   parseInt(prompt("ingrese un numero"));
    let numero4 =   parseInt(prompt("ingrese un numero"));
    let numero5 =   parseInt(prompt("ingrese un numero"));

    let resultado =  numero1 + numero2 + numero3 + numero4 + numero5;

    alert("la suma de los numero es" + resultado);

}


/**
 * A nuestro script agreguemos el promedio de todos los números ingresados.
 */

let promedio = () => {
    let resultado = 0;
    let  cantidad =  parseInt(prompt("numerod e veces a iterar"))
    for (let i  = 1 ; i<= cantidad ; i ++) {
        let numero =  parseInt(prompt("ingrese un numero"));
        resultado =  numero  + resultado;
    }
    alert("la suma de los numero es" + resultado/cantidad);
}

/**
 Ingresar N cantidad de edades mediante prompt hasta que se ingrese un cero.
 Al finalizar mostrar cuántos son mayores de edad
 */

let edad =  () => {
    let contador = 0;
    for(;;) {
        let edad =  parseInt(prompt("deme su edad ,  0 para salir"));
        if(edad === 0) {
            alert(" numero de  persoanar mayores es" + contador);
            return
        }

        if (edad >=  18) {
            contador++;
        }
    }

}




