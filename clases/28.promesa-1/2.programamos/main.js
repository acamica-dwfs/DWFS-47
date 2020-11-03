/*Traer información de la API de github*/
//Hacer fetch de la información de un usuario de github por nombre
//Hacer fetch de la información de los followers de ese usuario (con el endpoint devuelto en el fetch anterior) y hacer console.log del nombre de usuario de los primeros 5 followers.

const  URL = "https://api.github.com/users/";
const USERNAME = 'yulian-zapata';

const getGithubUser = (username) => {
    fetch(URL + username)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        }).catch(err => {
        console.error('fetch failed', err);
    });
}
const getUserFirst5Followers = (username) => {
    fetch(URL + username +'/followers')
        .then(response => response.json())
        .then(json => {
            for(let i = 0; i < 5; i++){
                console.log(json[i].login);
            }
        }).catch(err => {
        console.error('fetch failed', err);
    });
}

getGithubUser(USERNAME);
getUserFirst5Followers(USERNAME);
