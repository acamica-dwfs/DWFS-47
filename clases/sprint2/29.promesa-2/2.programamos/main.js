/**
 Ejecuta 3 llamadas diferentes al siguiente endpoint:
 https://pokeapi.co/api/v2/pokemon/ + (número entero)

 Cuando todas las llamadas estén completas, muestra los resultados por pantalla modificando el DOM.

 */
/*
const URL =  'https://pokeapi.co/api/v2/pokemon-form/';

let pokemon1 =  fetch(URL + "22/").then((response) => response.json());
let pokemon2 =  fetch(URL + "11/").then((response) => response.json());
let pokemon3 =  fetch(URL + "32/").then((response) => response.json());
let divPrincipal =  document.getElementById("pokeCtn");

Promise.all([pokemon1, pokemon2, pokemon3 ]).then((response) => {
    for (let i = 0 ; i < response.length ; i++ ){
        crearHtml(response[i]);
    }
}).catch((err) => {
    console.log("error con la peticion"+  err);
});

let crearHtml =  (poke) => {
    let div  =  document.createElement("div");

    let h2  =  document.createElement("h2");
    h2.textContent =  poke.pokemon.name + "#"+ poke.id;

    let imagen = document.createElement("img");
    imagen.src =  poke.sprites.front_default;

    div.appendChild(h2);
    div.appendChild(imagen);
    divPrincipal.appendChild(div);
}*/


let fetch1 = fetch('https://pokeapi.co/api/v2/pokemon/46')
    .then(response => response.json());
let fetch2 = fetch('https://pokeapi.co/api/v2/pokemon/72')
    .then(response => response.json());
let fetch3 = fetch('https://pokeapi.co/api/v2/pokemon/66')
    .then(response => response.json());

Promise.all([fetch1, fetch2, fetch3])
    .then((data) => {
        console.log(data);
        /*data.forEach(element => {
            addToDOM(element)
        });*/
        data.map(element  => {
            addToDOM(element)
        })
        /*for (let i = 0; i < data.length; i++) {//TODO : no utilizar for
            addToDOM(data[i]);
        }*/
    }).catch((error) => {
    console.log(`Error: ${error}`);
})

/**
 *  es una funcion para crear dinamicamente  el html
 * @param info :: parametro de pokemon
 */
function addToDOM(info) {
    let pokeCtn = document.getElementById('pokeCtn');
    let ctn = document.createElement('div');
    let name = document.createElement('h2');
    name.textContent = `${info.name} #${info.id}`;
    let img = document.createElement('img');
    img.setAttribute('src', info.sprites.front_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}
