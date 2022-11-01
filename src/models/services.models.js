const mongoose = require('mongoose')
const Schema = mongoose.Schema
const category = require('./categories.models')


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
   
    status: {
        type: String,
        required: true,
    },
   
 

}, {timestamps: true})

module.exports = new mongoose.model('services', serviceSchema)
