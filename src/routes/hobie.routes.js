const express = require('express')
const router = express.Router()
let hobieController = require('./../controller/hobie.controller')


router.post('/', hobieController.createOne)
router.post('/many', hobieController.createMany)

router.get('/one', hobieController.getOneWhere)

router.get('/', hobieController.getMany)

router.put('/find_update_or_create', hobieController.findUpdateOrCreate)
router.put('/find_where_and_update', hobieController.findUpdate)

router.post('/datatable', hobieController.datatable)

router.get('/:id', hobieController.getOneById)
router.put('/:id', hobieController.updateById)
router.delete('/:id', hobieController.findIdAndDelete)

module.exports = router
