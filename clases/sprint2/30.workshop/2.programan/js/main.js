let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('search');
let pokeCtn = document.getElementById('pokeCtn');
let personajes = [];
/**
 * tendencia  de gifs
 * @param limit ::  limite de elementos
 */
const trending = (limit) => {
    let url = `${BASE_URL}trending?api_key=${api}&limit=${limit}`;
    let result = apiFetchGET(url);
    result.then((resp) => {
        pokeCtn.innerHTML = "";
        resp.data.map(item => {
            addToDOM(item);
        })
    }).catch((e) => {
        console.log("a ocurrido un error" + e);
    })
}

/**
 *   Buscar un gif
 * @param term ::  termino de busueda
 */
const searchGif = (term) => {
    let url = `${BASE_URL}search?q=${term}&api_key=${api}`;
    let result = apiFetchGET(url);
    result.then((resp) => {
        console.log("llamado a buscar gifs");
        pokeCtn.innerHTML = "";
        resp.data.map(item => {
            addToDOM(item);
        })
    }).catch((e) => {
        console.log("a ocurrido un error" + e);
    })
}
/**
 * agrega dinamicamente los elementos al html
 * @param info
 */
const addToDOM = (info) => {
    let divRow = document.createElement('div');
    divRow.classList.add('row');

    let divColum = document.createElement('div');
    divColum.classList.add('col');

    let divCarContainer = document.createElement('div');
    divCarContainer.classList.add('card');
    divCarContainer.style = 'width: 18rem;';

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src', info.image);

    divCarContainer.appendChild(img);

    let divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    let title = document.createElement('h5');
    title.textContent = info.quote;
    title.classList.add('card-title');

    divCardBody.appendChild(title);

    divCarContainer.appendChild(divCardBody);
  
    divColum.appendChild(divCarContainer);
    divRow.appendChild(divColum);

    pokeCtn.appendChild(divRow);
}

const  quotessimp = (limit) => {
    let url = `${BASE_URL}/quotes?count=${limit}`;
    let result = apiFetchGET(url);
    result.then((resp)=>{
        resp.map(element =>{
            addToDOM(element);
            personajes.push(element);
        })
  
    }).catch((e) =>{
        alert('Ocurrió un error' + e);
    })
}
const searchPersonaje = (termino) =>{
    let resultado =   personajes.filter(element =>element.character.includes(termino));

    console.log(resultado);
    if (resultado) {
        pokeCtn.innerHTML = "";
        resultado.map(element =>{
            addToDOM(element);
            personajes.push(element);
        })
    }else{
        alert('No existe personaje');
    }
}


searchInput.addEventListener('keyup', () => {
    if (event.which === 13 || event.keyCode == 13) {
        searchPersonaje(searchInput.value);
    }
});

searchBtn.addEventListener('click', () => {
    searchPersonaje(searchInput.value);
});


quotessimp(4);

