const json = require('body-parser/lib/types/json')
const express = require('express')
const router = express.Router()
let userModel = require('./../models/user.models')


// router.post('/', userController.createOne)
// router.post('/many', userController.createMany)

// router.get('/one', userController.getOneWhere)

// router.get('/', userController.getMany)

// router.put('/find_update_or_create', userController.findUpdateOrCreate)
// router.put('/find_where_and_update', userController.findUpdate)

// router.post('/datatable', userController.datatable)

// router.get('/:id', userController.getOneById)
// router.put('/:id', userController.updateById)
// router.delete('/:id', userController.findIdAndDelete)


router.post('/newUser/', async function (req, res) {
    
    let nuevo_usuario  = req.body
    console.log(req.body)

   
    try {

        console.log(nuevo_usuario.nombre_user)
      
       
        res.status(200).json({
            success:true,
     
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
