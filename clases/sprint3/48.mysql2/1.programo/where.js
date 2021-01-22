var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {
      sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
        { replacements: ['test 1'], type: sequelize.QueryTypes.SELECT }
    ).then(function (projects) {
        console.log(" datos encontrados:")
        console.log(projects)
        return projects;
    }).catch( e => {
        console.log("error  en la insercion " + e)
    })
}

app.get( "/productos",  async  (req, res) => {
      await  sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
          { replacements: ['test 1'], type: sequelize.QueryTypes.SELECT }
      ).then(function (projects) {
          console.log(" datos encontrados:")
          console.log(projects)
           res.status(200).json({ result})
      }).catch( e => {
          console.log("error  en la insercion " + e)
           res.status(400).json({  status: false})
      })
})




app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});
