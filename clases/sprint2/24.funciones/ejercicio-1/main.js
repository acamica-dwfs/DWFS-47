//4 tipos de función realizando lo mismo
function double (x){
    return x * 2;
}
console.log(double(10));

let double2 = function(x) {
    return x * 2;
};
console.log(double2(10));

const double3 = (x) => {
    return x * 2;
};
console.log(double3(10));

let result = (function (x) {
    return x * 2;
})(10);
console.log(result);


//Scope
let scope = "Soy global";

function testScope() {
    let scope = "Soy local";
    console.log ("Adentro de la función: " + scope);
}

testScope();

console.log("Afuera de la función: " + scope);


//ejemplo 2
let scope2 = "Soy global";

function testScope2() {
    scope2 = "Soy local";

    console.log("Adentro de la segunda función: " + scope2);
}

console.log("Afuera de la segunda función: " + scope2);

testScope2();

//ejemplo 3 - hosting declaración scope 3, da error - descomentar para mostrar ejemplo
// let scope3 = "Soy global";

// function testScope3() {
//     console.log ("Adentro de la tercera función: " + scope3);
//     let scope3 = "Soy local";
// }

// testScope3();

// console.log("Afuera de la tercera función: " + scope3);

//Se reasigna el valor de scope2 tras ejecutar la función
console.log("Afuera de la segunda función: " + scope2);


//Hoisting en funciones
function sayHi(name){
    console.log("Hola " + name);
}
sayHi("Pedro");


sayHi2("Pepe");
function sayHi2(name){
    console.log("Hola " + name);
}


// try / catch
const secretNum = 25;
let guess = 3;
let win = 0;

/*Para jugarlo comentar la linea "let guess = 3;" y la última línea del código y descomentar el siguiente comentario
/*do{
    let guess = prompt("Adivine el número");
    guessTheNum(secretNum, guess);
}while( win === 0);*/

function guessTheNum(secret, guess){
    try {
        if (isNaN(+guess)){
            throw new Error("No fue un número lo que se ingresó");
        }else if(guess == ''){
            throw new Error("No se ingresó un número");
        } else if(+guess > secret){
            throw new Error("El número ingresado es muy alto");
        } else if(+guess < secret){
            throw new Error("El número ingresado es muy bajo");
        }
        win = 1;
        alert("Correcto, el número era: " + secret);
    } catch (error)  {
        alert(error);
    }
}
guessTheNum(secretNum, guess);
