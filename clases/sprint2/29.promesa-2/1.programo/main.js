//Fetch

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts/42");

fetchPromise.then(response => {
    console.log(response);
});




//Promesas en cadena, el valor de 'result' se va modificando a medida se avanza en la cadena


let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
}).then((result)=>{
    console.log('Cadena de promesas');
    console.log(result); // 2
    return result * 2;
}).then((result)=>{
    console.log(result); // 4
    return result * 2;
}).then((result)=>{
    console.log(result); // 8
    return result * 2;
}).then((result)=>{
    console.log(result); //  16
    return result * 2;
}).then((result)=>{
    console.log(result); // 32
    return result * 2;
}).then((result)=>{
    console.log(result); // 64
    return result * 2;
})

//Comparar lo siguiente con la cadena de promesas
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
}).then((result)=>{
    console.log('Promesas no encadenadas');
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
});

promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})

let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 20000);
})
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 400);
})
let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("a"), 50000);
});

Promise.all([promesa1, promesa2, promesa3]).then((result) => {
    console.log("promesas ejecutadas")
    console.log(result);
}).catch((err) => {
    console.log("error" + err);
})

Promise.race([promesa1, promesa2, promesa3]).then((result) => {
    console.log("la primera  promesa en ejecutarse");
    console.log(result);
}).catch((err) => {
    console.log("error" + err);
});


//Promise Race : cual se ejecuta primero
let promiseRace1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 1'), 1200);
});
let promiseRace2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 2'), 800);
});
let promiseRace3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 3'), 650);
});
let promiseRace4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 4'), 1000);
});

Promise.race([promiseRace1, promiseRace2, promiseRace3, promiseRace4]).then((response) => {
    console.log("La promesa ganadora de la carrera es la " + response);
}).catch((error)=>{
    console.log('Error:' + error);
})

//Promise.all()
let promiseAll1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 800);
});
let promiseAll2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 650);
});
let promiseAll3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
});
Promise.all([promiseAll1, promiseAll2, promiseAll3]).then((response) => {
    console.log('Promise.all');
    console.log(response);
    let suma = 0;
    let multi = 1 ;
    for(let i = 0; i < response.length; i++){
        suma += response[i];
        multi  *=  response[i];
    }
    console.log("la suma es :" +suma);
    console.log("la multiplicacion  es :" +multi);
}).catch((error)=>{
    console.log('Error en Promise.all 1: ' + error);
})


//Promise.all() con promesas rechazados
let promise2All1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 800);
});
let promise2All2 = new Promise((resolve, reject) => {
    reject(2);
});
let promise2All3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
});
Promise.all([promise2All1, promise2All2, promise2All3]).then((response) => {
    console.log('Promise.all 2');
    console.log(response);
    let suma = 0;
    for(let i = 0; i < response.length; i++){
        console.log(response[i]);
        suma += response[i];
    }
    console.log(suma);
}).catch((error)=>{
    console.log('Error en Promise.all 2: ' + error);
})
