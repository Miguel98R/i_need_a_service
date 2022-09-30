const express = require('express')
const router = express.Router()


router.use('/user', require('./user.routes'))
router.use('/hobie', require('./hobie.routes'))


router.all("*", (req, res) => {
    res.status(404).json({
        code: 404,
        message: 'Not Found',
        error: '404- Not Found',
        data: []

    })
})

module.exports = router
