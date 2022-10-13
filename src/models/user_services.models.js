const mongoose = require('mongoose')
const Schema = mongoose.Schema
const services = require('./services.models')

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
   
    service: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: services
    },
  

}, {timestamps: true})

module.exports = new mongoose.model('user', userSchema)
