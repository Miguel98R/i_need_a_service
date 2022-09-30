const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()



//Configuraciones 
app.set('port',3001)//puerto
app.set('appName','i_need_a_service')//nombre de la app

app.set('views',path.join(__dirname,'views')) //donde se ecuentran las vistas
app.set('view engine','pug')//motor de vistas

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use('/public',express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rutas
app.use(require('./viewEngine/routes'))//rutas de las vistas
app.use('/api', require('./routes/_api'))//rutas del backend

//Inicializando el servidor 
app.listen(app.get('port'),()=>{
    console.log(app.get('appName'))
    console.log("Server corriendo en el puerto:",app.get('port'))

})