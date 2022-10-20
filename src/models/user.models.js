const mongoose = require('mongoose')
let Schema = mongoose.Schema


let userSchema = new Schema({
    nombre_user: {
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
   calle_user:{
        type:String,
        required:false
    },
    municipio_user:{
        type:String,
        required:false
    },
    estado_user:{
        type:String,
        required:false
    },
    codigo_postal:{
        type:String,
        required:false
    },
    nacimiento: {
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
  

}, {timestamps: true})

module.exports = new mongoose.model('user', userSchema)
