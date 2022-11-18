const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = require('./user_services.models')

let serviceSchema = new Schema({
    nombre_service: {
        type: String,
        required: true,
     },
     description:{
        type: String,
        required: true,
    },
     category: {
        type: String,
        required: false,
     
    },
    persona_encargada:{
        type:String,
        required:false
    },
    user_service: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:user
     },
   
    status: {
        type: String,
        required: true,
        default:true
    },
   
 

}, {timestamps: true})

module.exports = new mongoose.model('services', serviceSchema)
