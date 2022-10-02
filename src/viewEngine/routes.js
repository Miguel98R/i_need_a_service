const express = require('express')
const router = express.Router()

let userModel = require('./../models/user.models')

router.get("/", async (req, res) => {
    
    res.render('index', {title: 'myWeb'})
})

router.get("/about", async (req, res) => {

    let users = await userModel.find()
    console.log("users",users)

    res.render('about',{title: 'myWeb | about', users})
})

module.exports = router
