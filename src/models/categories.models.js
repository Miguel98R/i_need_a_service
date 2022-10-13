const mongoose = require('mongoose')
let Schema = mongoose.Schema


let categorySchema = new Schema({
    category_name: {
        type: String
    },
    category_img: {
        type: String
    },
    description:{
        type:String
    },
    status:{
        type:String
    }


}, {timestamps: true})

module.exports = new mongoose.model('categorias', categorySchema)
