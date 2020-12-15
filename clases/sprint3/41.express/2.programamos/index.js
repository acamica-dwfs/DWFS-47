const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

const telefonos = [
    {
        marca:"Noxia",
        modelo:"1100",
        pantalla:"TFT de 6.5",
        sistema_operativo:"Android 9.0 Pie."
    },
    {
        marca:"Samsung",
        modelo:"Galaxy A20",
        pantalla:"TFT de 6.5",
        sistema_operativo:"Android 9.0 Pie."
    },
    {
        marca:"Alcatel",
        modelo:"One",
        pantalla:"TFT de 5.5",
        sistema_operativo:"Android 5.0 Pie."
    }
]


app.get("/telefonos", (req, res) => {

    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Listado de Telefonos',
        respuesta: telefonos
    };
    res.status(200).send(respuesta);
});


//Creamos el metodo Post para crear un nuevo telefono
app.post('/telefonos', function (req, res) {
    console.log(req.body.nombre);
    if (!req.body.marca || !req.body.modelo) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y habitantes son requeridos'
        };
    } else {
            celular = {
                marca: req.body.marca,
                modelo: req.body.modelo,
                pantalla: req.body.pantalla,
                sistema_operativo: req.body.sistema_operativo,
            };
            telefonos.push(celular);
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'celular creado',
                respuesta: celular
            };
    }
    //Imrpimimos respuesta
    res.send(respuesta);
});


app.use(function (req, res, next) {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
});
