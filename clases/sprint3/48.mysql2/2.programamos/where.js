var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {

    sequelize.query('SELECT * FROM estudiantes WHERE edad > 30 and activo = false',
        ).then(function (projects) {
        console.log(projects)
    })
}


async function findEmail() {

    sequelize.query('SELECT * FROM estudiantes where email like ?',
        { replacements: ['%pilar%'], type: sequelize.QueryTypes.SELECT }
        ).then(function (projects) {
        console.log(projects)
    })
}

findEmail()

//findAllRows();


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});