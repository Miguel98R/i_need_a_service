const json = require('body-parser/lib/types/json')
const express = require('express')
const router = express.Router()



let {new_user,new_user_service,login_user} = require('../controllers/user.controller')


router.post('/newUser',new_user )
router.post('/newUser_service',new_user_service )
router.post('/login',login_user )



module.exports = router