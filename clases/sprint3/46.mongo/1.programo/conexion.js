const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://IfrainDavidMedinaGarcia:c7071YWrxjHJG24q@cluster0.zi9ww.mongodb.net/peliculas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports = mongoose;
