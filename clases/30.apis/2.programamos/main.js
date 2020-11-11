/*
The Open Movie Database es una plataforma que ofrece una API
 para obtener información sobre películas. Vamos a registrarnos
 y realizar algunas llamadas a su API:
 */



//omdb API - The Open Movie Database.
//Api key se consigue en: http://www.omdbapi.com/
//Registrarse en vivo o utilizar este API KEY: 7fb789f2
const api_key = '7fb789f2';

const search =  async (title) => {
    try {
        let url = `https://www.omdbapi.com/?apikey=${api_key}&t=${title}`;
        let response = await fetch(url);
        response = await response.json();
        return response;
    } catch (e){
        console.log(e);
    }
}

const  movies = (movie) => {
    let  result =  search(movie);
    result.then((resp) => {
        if(resp.Response !== "False") {
            addDOM(resp);
        }else {
            alert("la pelicula no existe");
        }
    }).catch((e) => {
        console.log("a ocurrido un error" + e);
    })
}

const  addDOM = (data) => {
    let divApi = document.getElementById("api");

    let  img  = document.createElement("img");
    img.src =  data.Poster;

    let  p  = document.createElement("h2");
    p.textContent =  " actors:"+data.Actors;

    divApi.appendChild(img);
    divApi.appendChild(p);
}

movies("titanic");
