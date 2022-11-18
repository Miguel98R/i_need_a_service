const json = require('body-parser/lib/types/json')
const express = require('express')
const router = express.Router()



let {create_Service,see_services,getAllServices} = require('../controllers/service.controller')


router.post('/create_Service',create_Service )
router.post('/see_services/:_id',see_services )
router.post('/getAllServices',getAllServices )




module.exports = router