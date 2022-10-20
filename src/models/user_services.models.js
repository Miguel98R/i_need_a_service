const mongoose = require('mongoose')
const Schema = mongoose.Schema
const services = require('./services.models')

let userSchema = new Schema({
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
        type:Number,
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
   
    service: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: services
    },
  

}, {timestamps: true})

module.exports = new mongoose.model('user', userSchema)
