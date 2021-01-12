//npm install express
const express = require('express');
//npm install jsonwebtoken
const jwt = require('jsonwebtoken');

const app = express();

app.listen(1000, function () {
    console.log('aplicacion en el puerto 3000!');
});

const firma = "Hola Mundo";

const token = jwt.sign({
    id:1,
    nombre: "Dani"
}, firma);

console.log(token)
