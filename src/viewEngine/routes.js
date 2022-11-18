const express = require('express')
let userModel = require('./../models/user_services.models')
let user_serviceModel = require('./../models/user_services.models')
const router = express.Router()

let title = 'ServiceSerch'


router.get("/registro_servicio", async (req, res) => {
    
    res.render('vistas_add/registro_servicio', {title: title })
})

router.get("/", async (req, res) => {
    
    res.render('index', {title: title })
})

router.get("/login_service", async (req, res) => {
    
    res.render('login_service', {title: title })
})

router.get("/login", async (req, res) => {
    
    res.render('login', {title: title })
})


router.get("/about", async (req, res) => {

    res.render('about',{title: title })
})

router.get("/new_service", async (req, res) => {


    res.render('newService',{title:  title })
})


router.get("/home_user", async (req, res) => {

    
    res.render('user_home',{title:  title })

 
})



router.get("/seccion/:value", async (req, res) => {

    
    res.render('vistas_add/seccion',{title: title })

 
})





router.get("/:page", async (req, res) => {


    if(res.status(404)){
        res.render('code404')
    }
})


module.exports = router
