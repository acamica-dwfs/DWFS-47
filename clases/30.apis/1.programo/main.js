//Registrarse a la Api de OpenWeather para sacar la ApiKey gratuita en: https://openweathermap.org/ y agregarla a la variable
const apiKey = '1c67ae33adc312d33476ae4d68a09beb';
let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('search');
let loading =  document.getElementsByName("loading")[0]
loading.style.display = "none";

//Ejemplos de ciudades para el search query: London, Texas, Tokio, Seoul
//Tambien se puede buscar por país: Argentina, Uruguay, etc

//Fetch con async await
const newsSearch = async (city) => { //london
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const resp = await fetch(url);
    const info = await resp.json();
    return info;
}

const search = () => {
    let results = document.getElementById('results');//london
    loading.style.display = "block";
    let info = newsSearch(searchInput.value);//londo
    info.then(response => {
        loading.style.display = "none";
        /*if(response.cod !== "404" ){
            results.textContent = `Clima: ${response.weather[0].main}, Temperatura:  ${response.main.temp} °K`
        } else {
            results.textContent = "ciudad no encontrada";
        }*/
        results.textContent = response.cod !== "404" ?  `Clima: ${response.weather[0].main}, Temperatura:  ${response.main.temp} °K` : "ciudad no encontrada";

    }).catch(error => {
        loading.style.display = "none";
        console.log(error);
    })
}


searchBtn.addEventListener('click', () => {
    search();
});

searchInput.addEventListener('keyup', () => {
    if (event.which === 13 || event.keyCode == 13) {
        search();
    }
});
