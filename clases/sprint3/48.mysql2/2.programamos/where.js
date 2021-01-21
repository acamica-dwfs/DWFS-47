var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {

    sequelize.query('SELECT * FROM inscriptos WHERE email like ?',
        { replacements: ['%@gmail.com'], type: sequelize.QueryTypes.SELECT }
    ).then(function (projects) {
        console.log(projects)
    })
}

findAllRows();


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});