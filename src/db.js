const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/iNeedaService').then(function () {
    console.log('Se conecto a la DB')
}).catch(function (e) {
    console.error('Error al conetarse a a db', e)

});

module.exports = mongoose
