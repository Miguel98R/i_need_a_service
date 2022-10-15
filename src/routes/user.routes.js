const json = require('body-parser/lib/types/json')
const express = require('express')
const router = express.Router()
let userModel = require('./../models/user.models')


router.post('/newUser/', async function (req, res) {
    
    let nuevo_usuario  = req.body
    console.log(req.body)

   
    try {

        let user = new userModel ({
            nombre_user : nuevo_usuario.nombre_user,
            edad : nuevo_usuario.edad,
            password : nuevo_usuario.password,
            email : nuevo_usuario.email
        })

        user.save()

        console.log(nuevo_usuario.nombre_user)
      
       
        res.status(200).json({
            success:true,
            data:user
     
        })
        
    } catch (e) {
        console.error(e)
        res.status(500).json({
            succes:false,
            error:e
            
        })
    }
    
    
})

module.exports = router