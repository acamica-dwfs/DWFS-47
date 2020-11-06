/*Traer información de la API de github*/
//Hacer fetch de la información de un usuario de github por nombre
//Hacer fetch de la información de los followers de ese usuario

const  URLGIT = "https://api.github.com/users/";
//const  USERNAME = 'yulian-zapata';


const getGithubUser  =  (username) => {
    fetch(  URLGIT + username )  // https://api.github.com/users/yulian-zapata
        .then(response => response.json())
        .then(json => {
            if(json.followers > 0) {
                let img = document.querySelector(".github img");
                let span = document.querySelector(".github span");
                img.src = json.avatar_url;
                span.textContent = "Su seguidores son :" + json.followers;
            }
        }).catch(err => {
            console.log("error de la api" + err);
    })
}
const  getUserFirst5Followers =  (username) => {
    try {
        fetch(URLGIT + username + '/followers')  // https://api.github.com/users/yulian-zapata/followers
            .then(response => response.json())
            .then(json => {
                console.log("seguidores")
                for (let i = 0; i <= 5; i++) {
                    console.log(json[i].login)
                }
            }).catch(err => {
            console.log("error de la api" + err);
        });
    } catch (e){
        console.log("error " +  e);
    }
}
let USERNAME =  prompt("deme un usuario ");
getGithubUser(USERNAME);
getUserFirst5Followers(USERNAME);
