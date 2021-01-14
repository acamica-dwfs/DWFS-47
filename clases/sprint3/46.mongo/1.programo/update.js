const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
})

//Creamos el modelo

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});

//Actualizamos los datos 
pelicula.findOne({_id:'5efa54e6beaaeb0474d496ef'}).then(function(resultado){
    resultado.titulo = 'Pesadilla en la calle del infierno';
    resultado.director = 'Wes Craven';
    resultado.genero = 'Terror';
    resultado.ano = '1984';
    resultado.save();
    console.log(resultado);
});