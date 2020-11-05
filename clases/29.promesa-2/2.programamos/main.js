/**
 Ejecuta 3 llamadas diferentes al siguiente endpoint:
 https://pokeapi.co/api/v2/pokemon/ + (número entero)

 Cuando todas las llamadas estén completas, muestra los resultados por pantalla modificando el DOM.

 */


let fetch1 = fetch('https://pokeapi.co/api/v2/pokemon/46')
    .then(response => response.json());
let fetch2 = fetch('https://pokeapi.co/api/v2/pokemon/72')
    .then(response => response.json());
let fetch3 = fetch('https://pokeapi.co/api/v2/pokemon/66')
    .then(response => response.json());

Promise.all([fetch1, fetch2, fetch3])
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            addToDOM(data[i]);
        }
    }).catch((error) => {
    console.log(`Error: ${error}`);
})

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
