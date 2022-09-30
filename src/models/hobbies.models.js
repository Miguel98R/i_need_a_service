const mongoose = require('mongoose')
let Schema = mongoose.Schema


let hobieSchema = new Schema({
    name: {
        type: String
    },
    key: {
        type: Number
    },


}, {timestamps: true})

module.exports = new mongoose.model('hobie', hobieSchema)
