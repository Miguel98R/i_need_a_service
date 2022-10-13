const mongoose = require('mongoose')
const Schema = mongoose.Schema
const category = require('./categories.models')
const user_service = require('./user_services.models')

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
        type: Schema.Types.ObjectId,
        required: false,
        ref: category
    },
    user_service: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: user_service
    },
    status: {
        type: String,
        required: true,
    },
   
 

}, {timestamps: true})

module.exports = new mongoose.model('services', serviceSchema)
