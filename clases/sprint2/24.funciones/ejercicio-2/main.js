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
let users = ["Pepe", "Juan", "Fiora", "Mafalda", "Salvador", "Gaviota"];

function addUser(){
    //input usuario
    let newUsername = prompt("Ingrese un nuevo nombre de usuario");
    //manejo de errores
    try{
        //throw new Error si username vacío
        if(!newUsername){
            throw new Error("Información incompleta, no se ingresó un username");
        }
        //throw new Error si username repetido
        for(let i = 0; i < users.length; i++){
            if(newUsername === users[i]){
                throw new Error("Usuario ya existente");
            }
        }
        //agregar usuario nuevo al array
        users.push(newUsername);
        alert(`Bienvenido ${newUsername}!`);
        //observar que si no hay error se agrega al array
        console.log(users);
    } catch (error){
        alert(error);
        //observar que si hay un error no se agrega
        console.log(users);
    }
};

addUser();
