let userModel = require('./../models/user.models')
let user_serviceModel = require('./../models/user_services.models')
const moment = require('moment')
const moment_timezone = require('moment-timezone')

let login_user = async function (req, res) {

    let {email, password,type_user} = req.body


    try {
        if(type_user == 'cliente'){

            let user_data = await userModel.findOne({email}).lean()

            if (!user_data) {
                res.status(404).json({
                    success: false,
                    message: 'Usuario incorrecto'
                })
                return 0
            }
    
            console.log(user_data.password)

            if (user_data.password == password) {

                res.status(200).json({
                    message: 'Iniciando sesión',
                    success: true,
                    data: user_data,
                    
                })
    
    
            } else {
    
                res.status(403).json({
                    code: 403,
                    success: false,
                    message: 'Contraseña incorrecta'
                })
                return 0
    
    
            }
            
        }

        if(type_user == 'Service'){

            let user_data = await user_serviceModel.findOne({email}).lean()

            if (!user_data) {
                res.status(404).json({
                    success: false,
                    message: 'Usuario incorrecto'
                })
                return 0
            }
    
            console.log(user_data.password)

            if (user_data.password == password) {

                res.status(200).json({
                    message: 'Iniciando sesión',
                    success: true,
                    data: user_data,
                    
                })
    
    
            } else {
    
                res.status(403).json({
                    code: 403,
                    success: false,
                    message: 'Contraseña incorrecta'
                })
                return 0
    
    
            }
            
        }

    

    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            error: e
        })
        return 0
    }

}

let new_user = async function (req, res) {
    
    let nuevo_usuario  = req.body
    console.log(req.body)

   
    try {

        let email = nuevo_usuario.email
        let user_exist = await userModel.findOne({email})

        if(user_exist){
            res.status(405).json({
                success:false,
                message:'El usuario ya existe'
            })

            return
        }

        let user = new userModel ({
            nombre_user : nuevo_usuario.nombre_user,
            edad : nuevo_usuario.edad,
            password : nuevo_usuario.password,
            email : nuevo_usuario.email
        })

        user.save()

        console.log(nuevo_usuario.nombre_user)
      
       
        res.status(200).json({
            success:true,
            data:user
     
        })
        
    } catch (e) {
        console.error(e)
        res.status(500).json({
            succes:false,
            error:e
            
        })
    }
    
    
}



let new_user_service = async function (req, res) {
    
    let nuevo_usuario_sevice  = req.body
    

    let user_service 
   
    try {

         user_service = await user_serviceModel.findOne({email:nuevo_usuario_sevice.email})
      

         if(user_service){
        
            res.status(404).json({
                success:false,
                message:'El usuario ya existe'
                
            })
            return 
        }

        let fecha_nac = nuevo_usuario_sevice.nacimiento_s

        let user = new user_serviceModel ({
            nombre_user_s: nuevo_usuario_sevice.nombre_user_s,
            no_int : nuevo_usuario_sevice.no_int,
            no_ext : nuevo_usuario_sevice.no_ext,
            calle_user_s : nuevo_usuario_sevice.calle_user_s,
            estado_user_s : nuevo_usuario_sevice.estado_user_s,
            municipio_user_s : nuevo_usuario_sevice.municipio_user_s,
            codigo_postal_s : nuevo_usuario_sevice.codigo_postal_s,
            referencia_dir : nuevo_usuario_sevice.referencia_dir,
            nacimiento_s: moment(fecha_nac).format(),
            password : nuevo_usuario_sevice.password,
            email : nuevo_usuario_sevice.email,
            

        })
    
      
        user.save()

        
       
        res.status(200).json({
            success:true,
            data:user
     
        })
        
    } catch (e) {
        console.error(e)
        res.status(500).json({
            succes:false,
            error:e
            
        })
        return 
    }
    
    
}

module.exports = { new_user , new_user_service ,login_user}