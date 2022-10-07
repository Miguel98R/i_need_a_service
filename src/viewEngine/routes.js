const express = require('express')
const router = express.Router()

let userModel = require('./../models/user.models')

router.get("/", async (req, res) => {
    
    res.render('index', {title: 'I need a service '})
})

router.get("/about", async (req, res) => {

    res.render('about',{title: 'I need a service | about'})
})

router.get("/new_service", async (req, res) => {


    res.render('newService',{title: 'I need a service | Nuevo servicio'})
})

router.get("/sudo", async (req, res) => {


    res.render('admin',{title: 'I need a service | Admin'})
})


module.exports = router
