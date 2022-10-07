const mongoose = require('mongoose')
let Schema = mongoose.Schema


let adminUserSchema = new Schema({
    nombre_user: {
        type: String,
        required: true,
     },
     nombre: {
        type: String,
        required: true,
     },
     status: {
        type:Boolean,
        required: true,
        default:true
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

module.exports = new mongoose.model('user', adminUserSchema)
