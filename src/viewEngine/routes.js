const express = require('express')
const router = express.Router()

let userModel = require('./../models/user.models')

router.get("/", async (req, res) => {
    let users = await userModel.find()
    res.render('index', {title: 'myWeb', users})
})

module.exports = router
