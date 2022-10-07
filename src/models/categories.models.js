const mongoose = require('mongoose')
let Schema = mongoose.Schema


let categorySchema = new Schema({
    category_name: {
        type: String
    },
    category_img: {
        type: String
    },
    category_description:{
        type:String
    },
    category_status:{
        type:String
    }


}, {timestamps: true})

module.exports = new mongoose.model('categorias', categorySchema)
