
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

const apiFetchPOST = async (url, body) => {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        response = await response.json();
        return response;
    } catch (e) {
        console.log(e);
    }
}

//  los métodos del protocolo http
//  GET :  obtener  un recurso
//  POST  : crear un recurso
//  PUT  :  actualiza un recurso
// DELETE :  eliminar  un recurso

// CRUD
