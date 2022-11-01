

const mongoose = require('mongoose');


mongoose.connect('mongodb://'+process.env.URL_SERVER+'/'+process.env.DB_NAME).then(() => {

    console.log('Se conecto a la DB',process.env.DB_NAME)
}).catch( (e) => {
    console.error('Error al conetarse a a db', e)

});


module.exports = mongoose
