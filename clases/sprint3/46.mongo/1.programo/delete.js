const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
})

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});


//Elimino  los datos del id 5efa54e6beaaeb0474d496ef
pelicula.deleteOne({ _id: '5efa54e6beaaeb0474d496ef' }).then(function (error,resp) {
    console.log(resp);
});