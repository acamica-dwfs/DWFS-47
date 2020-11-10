//Registrarse a la Api de OpenWeather para sacar la ApiKey gratuita en: https://openweathermap.org/ y agregarla a la variable
const apiKey = '1c67ae33adc312d33476ae4d68a09beb';
let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('search');
let loading =  document.getElementsByName("loading")[0]
loading.style.display = "none";

//Ejemplos de ciudades para el search query: London, Texas, Tokio, Seoul
//Tambien se puede buscar por país: Argentina, Uruguay, etc

//Fetch con async await
const newsSearch = async (city_name) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`;
    const resp = await fetch(url);
    const info = await resp.json();
    return info;
}

const search = () => {
    let results = document.getElementById('results');
    loading.style.display = "block";
    let info = newsSearch(searchInput.value);
    info.then(response => {
        loading.style.display = "none";
        console.log(response);
        results.textContent = `Clima: ${response.weather[0].main}, Temperatura:  ${response.main.temp} °K`
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
