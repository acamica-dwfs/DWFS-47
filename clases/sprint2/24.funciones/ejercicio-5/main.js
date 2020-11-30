/***
 Solicitar al visitante que ingrese su nombre de usuario.

 Almacenar el nombre de usuario ingresado el una función.

 Escenario 1: El nombre no está en la lista.
 Darle la bienvenida al nuevo usuario

 Escenario 2: El nombre de usuario existe.
 Dar un aviso al usuario que el nombre de usuario se encuentra en uso

 Utilizar una función con try / catch para realizar la validación.

 * @type {string[]}
 */
var users = ["Pepe", "Juan", "Fiora", "Mafalda", "Salvador", "Gaviota"];

let inicio =  () => {
    let  nombre  =  prompt("digite su nombre");
    let  elusuarioexiste = usuario(nombre); // asignacion de un resultado  devuelto por una  funcion
    if(elusuarioexiste) { // elusuarioexiste
        alert( "ya existe en la lsita");
    } else {
        users.push(nombre);
        alert(" hola "  +  nombre  +  " bienvenido al grupo");
    }
    console.log("array");
    console.log(users);
}

let usuario =  (name) =>  {
    let existe = false;
    for (let a  = 0 ; a <  users.length ; a++) {
        if(name === users[a]){ // buscador
            existe = true;
        }
    }
    return existe;
}
for ( let  i = 0;  i < 3 ; i++) {
    inicio();
}



