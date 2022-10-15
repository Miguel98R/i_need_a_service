const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ServiceSerch').then(() => {
    console.log('Se conecto a la DB')
}).catch( (e) => {
    console.error('Error al conetarse a a db', e)

});

module.exports = mongoose
