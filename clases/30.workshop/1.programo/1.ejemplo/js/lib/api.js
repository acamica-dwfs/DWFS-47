
/**
 *  funcion generica  de  peticiones  api
 * @param url ::  url a consultar
 * @returns {Promise<any>} ::  promesa
 * peticion tipo GET
 */
const apiFetchGET = async (url) => {
    try {
        let response = await fetch(url);
        response = await response.json();
        return response;
    } catch (e) {
        console.log(e);
    }
}
