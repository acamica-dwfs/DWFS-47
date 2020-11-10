/*
The Open Movie Database es una plataforma que ofrece una API
 para obtener información sobre películas. Vamos a registrarnos
 y realizar algunas llamadas a su API:
 */



//omdb API - The Open Movie Database.
//Api key se consigue en: http://www.omdbapi.com/
//Registrarse en vivo o utilizar este API KEY: 7fb789f2
let api_key = '7fb789f2';

//Enpoint de titulo de pelicula
async function getMovieByTitle(title) {
    let url = `https://www.omdbapi.com/?apikey=${api_key}&t=${title}`;
    const resp = await fetch(url);
    const data = await resp.json();
    addToDOM(data);
    //Puede en vez de crearse y ponerlo en el contenedor, cambiar el src a una imagen ya colocada en el HTML

    console.log(data);
};

const addToDOM = (info) => {
    let pokeCtn = document.getElementById('api');
    let ctn = document.createElement('div');
    let name = document.createElement('h2');
    name.textContent = `actors : ${info.Actors}`;
    let img = document.createElement('img');
    img.setAttribute('src', info.Poster);
    ctn.appendChild(img);
    ctn.appendChild(name);
    pokeCtn.appendChild(ctn);
}

getMovieByTitle('titanic');
//getMovieByTitle('Donnie Darko');
