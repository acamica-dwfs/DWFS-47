//fecha actual
let date = moment();
console.log(date);

//Dar formato a la fecha
console.log(date.format("YYYY MM DD"));
console.log(date.format("Z SS ss mm HH DD MM YYYY"));
console.log(date.format("YYYY MM DD HH mm ss SS Z"));
console.log(date.format("YYYY MM DD kk A"));


//Mostrar cuanto tiempo pasó de una fecha
console.log('A cuánto esta el 2016-11-03 de ahora: ' + moment('2016-11-03').fromNow());
console.log('A cuánto esta el 2025-02-13 de ahora: ' + moment('2025-02-13').fromNow());
console.log('A cuánto esta el 2020-04-03 de ahora: ' + moment('2020-04-03').fromNow());

//Manipular una fecha
console.log(moment().add(1, 'years').format("YYYY MM DD"));
console.log(moment().add(1, 'years').calendar());

console.log(moment().subtract(1, 'years').format("YYYY MM DD"));
console.log(moment().subtract(1, 'years').calendar());

console.log(moment().add(10, 'days').format("YYYY MM DD"));
console.log(moment().add(10, 'days').calendar());

console.log(moment().subtract(10, 'days').format("YYYY MM DD"));
console.log(moment().subtract(10, 'days').calendar());

let  fecha = moment().add(1, 'years').format("YYYY MM DD");
$('h1').text(fecha);
