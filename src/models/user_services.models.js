const mongoose = require('mongoose')
const Schema = mongoose.Schema

let user_ServiceSchema = new Schema({
    nombre_user_s: {
        type: String,
        required: true,
     },

    no_int:{
        type:String,
        required:false
    },
    no_ext:{
        type:String,
        required:false
    },
   calle_user_s:{
        type:String,
        required:false
    },
    municipio_user_s:{
        type:String,
        required:false
    },
    estado_user_s:{
        type:String,
        required:false
    },

     codigo_postal_s:{
        type:String,
        required:false
    },

     referencia_dir: {
        type: String,
        required: true,
     },
     nacimiento_s: {
        type:String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
   
    
    status: { // true activo 
        type: Boolean,
        required: true,
        default: true
    },
  

}, {timestamps: true})

module.exports = new mongoose.model('user_services', user_ServiceSchema)
