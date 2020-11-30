const numberrandom = ()=>{
    return Math.floor(Math.random() * 101);
}
let boton= document.getElementById("boton");
boton.addEventListener("click",()=>{
    console.log("exito");
    let input1 = document.getElementsByName("pokemon1") [0];
    let input2 = document.getElementsByName("pokemon2") [0];
    let input3 = document.getElementsByName("pokemon3") [0];
    console.log(input1.value, input2.value, input3.value);
})
let fetch1 = fetch('https://pokeapi.co/api/v2/pokemon/' + numberrandom())
    .then(response => response.json());
let fetch2 = fetch('https://pokeapi.co/api/v2/pokemon/' + numberrandom())
    .then(response => response.json());
let fetch3 = fetch('https://pokeapi.co/api/v2/pokemon/' + numberrandom())
    .then(response => response.json());

Promise.race([fetch1, fetch2, fetch3])
    .then((data) => {
        console.log(data);
        addToDOM(data);
        /*for (let i = 0; i < data.length; i++) {
            addToDOM(data[i]);
        }*/
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
