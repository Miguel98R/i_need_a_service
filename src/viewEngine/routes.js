const express = require('express')
const router = express.Router()

let title = 'ServiceSerch'

router.get("/", async (req, res) => {
    
    res.render('index', {title: title })
})

router.get("/about", async (req, res) => {

    res.render('about',{title: title + ' | about'})
})

router.get("/new_service", async (req, res) => {


    res.render('newService',{title:  title + ' | Nuevo servicio'})
})

router.get("/sudo", async (req, res) => {


    res.render('admin',{title: title + ' | Admin'})
})


module.exports = router
