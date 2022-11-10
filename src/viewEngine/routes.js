const express = require('express')
const router = express.Router()

let title = 'ServiceSerch'

router.get("/", async (req, res) => {
    
    res.render('index', {title: title })
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




///EL MIGUEL TODAVIA NO HACE QUE SIRVA -<<<<
router.get("/sudo", async (req, res) => {


    res.render('admin',{title: title })
})


module.exports = router
