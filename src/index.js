const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const db = require('./db')
let bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())


//Configuraciones
app.set('port', 3001);
app.set('appName', 'myWeb')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use('/public', express.static(path.join(__dirname, 'public')))


//rutas
app.use(require('./viewEngine/routes'))
app.use('/api', require('./routes/_api'))

//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log("Server corriendo en el puerto:", app.get('port'))

})
