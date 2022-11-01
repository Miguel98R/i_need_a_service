const json = require('body-parser/lib/types/json')
const express = require('express')
const router = express.Router()



let {new_user,new_user_service} = require('../controllers/user.controller')


router.post('/newUser',new_user )
router.post('/newUser_service',new_user_service )


module.exports = router