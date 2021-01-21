var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {

    sequelize.query("SELECT * FROM inscriptos", { type: sequelize.QueryTypes.SELECT })
        .then(function (productos) {
            console.log(productos);
        })
}

findAllRows();


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});