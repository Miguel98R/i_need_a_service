const mongoose = require('mongoose')
let Schema = mongoose.Schema

let hobySchema = require('./hobbies.models')


let userSchema = new Schema({
    name: {
        type: String
    },
    age: Number,
    user: String,
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    hobbies: [{
        type: Schema.Types.ObjectId,
        ref: hobySchema
    }]

}, {timestamps: true})

module.exports = new mongoose.model('user', userSchema)
