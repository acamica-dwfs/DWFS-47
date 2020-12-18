const express = require('express');
const router = express.Router();
const contactos = require("../contactos.json").contactos; // importando los datos en contactos.json


const middleValidarPost = (req, res, next) => {
  // que no exista !nombre   y que no  este en el listado status: 409
};

const middleValidarGet = (req, res, next) => {
    console.log(" middleware  de validar get");
    next();
}

/* GET users listing. */
router.get('/', middleValidarGet , (req, res, next) =>  {
    res.status(200).send({mensaje: 'Listado de contactos', respuesta: contactos});
});

// crea un nuevo
router.post('/' ,  (req, res)  =>{

});


module.exports = router;
