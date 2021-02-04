const Sequelize = require('sequelize');
<<<<<<< HEAD
const path = 'mysql://root:ohmyfi@localhost:3306/acamica';
=======
const path = 'mysql://root:@localhost:3306/resto';
>>>>>>> 7ad7c16fc58d4f548224855ce185b27318dbf941
const sequelize = new Sequelize(path, {
    operatorsAliases: false ,
    logging: false,
});

sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
}).finally(() => {
    sequelize.close();
});

module.exports = sequelize;
