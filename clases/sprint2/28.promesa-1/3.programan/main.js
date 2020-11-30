




















const TRENDING_SEARCH_URL = "http://api.giphy.com/v1/trending/searches?api_key=VhZH68eUeluE17m4y9UW4Wq7QZI9rLRd";
const SEARCH_TERM_URL = "http://api.giphy.com/v1/tags/related/{term}?api_key=VhZH68eUeluE17m4y9UW4Wq7QZI9rLRd";
let trendingSearchList = document.getElementById('giphy-trending-search');
let searchTermList = document.getElementById('giphy-term-search');


function getTrendingSearch(){
    fetch(TRENDING_SEARCH_URL)
        .then(response => response.json())
        .then(result => {
            let trendingSearchListData = result.data;
            for (let i = 0; i < trendingSearchListData.length; i++) {
                const trendingData = trendingSearchListData[i];
                addLiElementWithValue(trendingSearchList, trendingData); //se reutilizo codigo para crera elemento li linea38
            }
        })
        .catch(error => console.log('error', error));
}

function searchTerm( event ){
    let term = document.getElementById('searchTermValue').value;
    let url = SEARCH_TERM_URL.replace('{term}',term);

    clearUL(searchTermList);

    fetch(url)
        .then(response => response.json())
        .then(result => {
            let data = result.data;
            for (let i = 0; i < data.length; i++) {
                const searchTermData = data[i].name;
                addLiElementWithValue(searchTermList, searchTermData);
            }
        })
        .catch(error => console.log('error', error));
}

function addLiElementWithValue(ul, value){
    let trendingLi = document.createElement('li');
    trendingLi.textContent = value;
    ul.appendChild(trendingLi);
}

function clearUL(ul){
    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }
}


getTrendingSearch();

let searchTermButtom = document.getElementById('searchTerm');
searchTermButtom.addEventListener("click", searchTerm);
