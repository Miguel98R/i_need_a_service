
const moment = require('moment')
const moment_timezone = require('moment-timezone')

let user_serviceModel = require('./../models/user_services.models')
let Services  =  require('./../models/services.models')


let create_Service = async function (req,res){
    let {new_service} = req.body

    try {

        let service = new Services({

            nombre_service : new_service.nombre_service,
            description : new_service.description,
            category : new_service.category,
            persona_encargada : new_service.persona_encargada,
            user_service : new_service.user_service,
        })

        service =  service.save()

    
        res.status(200).json({
            success:true,
            data:[]
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error
        })

        return
        
    }
}

let see_services = async function (req,res){
    let _id = req.params

    try {

        let services =  await Services.find({user_service:_id})

        console.log(services)

    
        res.status(200).json({
            success:true,
            data:services
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error
        })

        return
        
    }
}


let getAllServices = async function (req,res){
    let {seccion} = req.body

    try {

 //       let services =  await Services.find({category:{$regex:seccion,$option:"i"}})

      let services =  await Services.find({category:new RegExp(seccion,'i')})

        console.log(services)

    
        res.status(200).json({
            success:true,
            data:services
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error
        })

        return
        
    }
}


module.exports = {create_Service,see_services,getAllServices}