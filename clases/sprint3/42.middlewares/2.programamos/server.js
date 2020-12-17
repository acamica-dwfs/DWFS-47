const express = require("express");
const server = express();
const port = 3000;
const contactos = [
    {
        nombre: "jhonathan",
        apellido: "tabares",
        email: "jdhdfhf@hfhf.com",
    },
    {
        nombre: "mar",
        apellido: "miranda",
        email: "jdhdfhf@hfhf.com",
    },
    {
        nombre: "esteban",
        apellido: "rojas",
        email: "jdhdfhf@hfhf.com",
    },
    {
        nombre: "wil",
        apellido: "duque",
        email: "jdhdfhf@hfhf.com",
    }
];
server.use(express.json());

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

const middleValidarPost = (req, res, next) => {
    // que no exista !nombre   y que no  este en el listado status: 409
};

const middleValidarGet = (req, res, next) => {
}


server.get("/persona", (req, res) => {
    res.json({ message: "OK" });
});

server.post("/persona", (req, res) => {
    res.json(req.body);
});

server.listen(port, () => {
    console.log("Servidor iniciado en el puerto: " + port);
});
