let elementos =  [1,2,3,4 , "hola", "4"];
console.log("con forEach")
elementos.forEach(function(item) {
    console.log(item);
});

elementos.forEach( item => {
    console.log(item);
});

console.log("con map")
elementos.map( aldana =>{
    console.log(aldana);
})

let buscador  =  elementos.filter( item  =>  item <= 2);
let  buscador2  =  elementos.filter( item  =>  item ===  "holaaaa");
console.log(buscador);
console.log(buscador2);


