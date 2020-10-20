/**
 Pide al usuario estos 4 datos:

 Nombre y apellido
 Background color
 Font color
 Font size

 Dibuja un cuadrado con el nombre y apellido en el centro y aplica las propiedades que solicitaste modificando el DOM.

 * @type {HTMLElement}
 */

//Caja del HTML para mostrar resultados
let box = document.getElementById('box');

let name = prompt('Ingrese su nombre y apellido');
let bg = prompt('Ingrese un background-color');
let color = prompt('Ingrese un color de fuente');
let size = prompt('Ingrese el número del tamaño de fuente');

let p = document.createElement('p');
p.textContent = 'Hola, soy ' + name;
p.style.color = color;
p.style.fontSize = size+'px';
box.appendChild(p);
box.style.backgroundColor = bg;
