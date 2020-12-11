const fs = require('fs');
fs.writeFile('acamica.txt',"hola mundo",  () => {
    console.log(" archivo creado con contenido");
});


