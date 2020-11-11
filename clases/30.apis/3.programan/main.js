const api = 'VhZH68eUeluE17m4y9UW4Wq7QZI9rLRd';
const BASE_URL = 'http://api.giphy.com/v1/gifs/';
let searchBtn = document.getElementById('searchBtn');
let trendingBtn = document.getElementById('trending');
let searchInput = document.getElementById('search');
let pokeCtn = document.getElementById('pokeCtn');

/**
 *  funcion generica  de  peticiones  api
 * @param url ::  url a consultar
 * @returns {Promise<any>} ::  promesa
 */
const apiFetch = async (url) => {
    try {
        let response = await fetch(url);
        response = await response.json();
        return response;
    } catch (e) {
        console.log(e);
    }
}

/**
 * tendencia  de gifs
 * @param limit ::  limite de elementos
 */
const trending = (limit) => {
    let url = `${BASE_URL}trending?api_key=${api}&limit=${limit}`;
    let result = apiFetch(url);
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
    let result = apiFetch(url);
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
    let ctn = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', info.images["480w_still"].url);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}


searchBtn.addEventListener('click', () => {
    searchGif(searchInput.value);
});

trendingBtn.addEventListener('click', () => {
    trending(4);
});

searchInput.addEventListener('keyup', () => {
    if (event.which === 13 || event.keyCode == 13) {
        searchGif(searchInput.value);
    }
});
