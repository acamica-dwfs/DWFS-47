const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const phoneRouter = require('./routes/contactos');

app.use(express.json());




app.use(express.json());

const middleLog = (err, req, res, next) => {
    console.log(
        req.method +
        " - " +
        req.path +
        " - " +
        JSON.stringify(req.query) +
        " - " +
        JSON.stringify(req.body)
    );

    if(err) {
        return res.status(500).json({message: "Error inesperado"});
    }

    next();
};


app.use('/', indexRouter, middleLog);
app.use('/personas', phoneRouter, middleLog);


app.listen(port, () => {
    console.log("Servidor iniciado en el puerto: " + port);
});
