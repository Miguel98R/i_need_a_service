const mongoose = require('mongoose')
let Schema = mongoose.Schema


let userSchema = new Schema({
    nombre_user: {
        type: String,
        required: true,
     },
     edad: {
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
