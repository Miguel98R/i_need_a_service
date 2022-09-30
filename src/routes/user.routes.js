const express = require('express')
const router = express.Router()
let userController = require('./../controller/user.controller')


router.post('/', userController.createOne)
router.post('/many', userController.createMany)

router.get('/one', userController.getOneWhere)

router.get('/', userController.getMany)

router.put('/find_update_or_create', userController.findUpdateOrCreate)
router.put('/find_where_and_update', userController.findUpdate)

router.post('/datatable', userController.datatable)

router.get('/:id', userController.getOneById)
router.put('/:id', userController.updateById)
router.delete('/:id', userController.findIdAndDelete)

module.exports = router
