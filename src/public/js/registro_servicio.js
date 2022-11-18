

$(document).ready(function () {

    let data_user = JSON.parse(localStorage.getItem('data_user_service'))
    let id_user = data_user._id

        
    $('.save_service').click(function(){
        let new_service = {}

        let nombre_service = $('.name_service').val()
        let category_servicio = $('.category_servicio').val()
        let persona_encargada = $('.persona_encargada').val()
        let description = $('.description').val()

        if(nombre_service == undefined || nombre_service == ''){
            notyf.error("Ingresa el nombre del servicio")
            return
        }
        if(category_servicio == 0 || category_servicio =='0' || category_servicio == undefined || category_servicio == ''){
            notyf.error("Ingresa la categoria del servicio")
            return
        }
        if(persona_encargada == undefined || persona_encargada == ''){
            notyf.error("Ingresa el nombre de la persona encargada")
            return
        }
        if(description == undefined || description == ''){
            notyf.error("Ingresa la descripción del servicio")
            return
        }
        

        new_service.nombre_service = nombre_service
        new_service.category = category_servicio
        new_service.description = description
        new_service.persona_encargada = persona_encargada
        new_service.user_service = id_user
        

        api_conection('POST','/api/services/create_Service',{new_service},
        function(){
            notyf.success("Servicio creado !")

            //location.href="/home_service"

        },
        function(){

        })

    })
   


    })
    
    