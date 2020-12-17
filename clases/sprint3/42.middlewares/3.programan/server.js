const express = require("express");
const server = express();
const port = 3000;

const autores = require("./autores.json").autores;

// Middleware para la gestión del body
server.use(express.json());

// estado de la api
app.get("/api/v1/autores/healt", (req, res) => {
    return res.status(200).json({ estado: "ok" });
});
