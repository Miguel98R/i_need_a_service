const express = require('express')
const router = express.Router()

//rutas de los modelos
router.use('/user', require('./user.routes'))
router.use('/hobie', require('./hobie.routes'))

//validacion de rutas
router.all("*", (req, res) => {
    res.status(404).json({
        code: 404,
        message: 'Not Found',
        error: '404- Not Found',
        data: []

    })
})

module.exports = router
