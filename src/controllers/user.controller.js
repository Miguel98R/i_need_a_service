let userModel = require('./../models/user.models')
let user_serviceModel = require('./../models/user_services.models')
const moment = require('moment')
const moment_timezone = require('moment-timezone')



let new_user = async function (req, res) {
    
    let nuevo_usuario  = req.body
    console.log(req.body)

   
    try {

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
    console.log("data>>>>>>>>>",nuevo_usuario_sevice)

    let user_service 
   
    try {

         user_service = await user_serviceModel.findOne({email:nuevo_usuario_sevice.email})
         console.log(user_service)

         if(user_service){
            console.log("entro aqui")
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
        console.log(user)
      
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
    }
    
    
}

module.exports = { new_user , new_user_service}