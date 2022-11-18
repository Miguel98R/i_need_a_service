

$(document).ready(function () {

    let data_user = JSON.parse(localStorage.getItem('data_user_service'))
    console.log(data_user)
    
    $('.user_name').text(data_user.nombre_user_s)

    let id = data_user._id

    let draw_Services = function(id){

        api_conection('POST','/api/services/see_services/'+id,{},function(data){
            let list_services = data.data
            

            for(let item of list_services){
                let status
                let btn_activar

                if(item.status){

                    status = '<p>Activo:<span class="text-success"> Si</span></p>'
                    btn_activar = '<button class="btn btn-danger">Desactivar</button>'



                }else{
                    status = '<p>Activo:<span class="text-danger"> No</span></p>'
                    btn_activar = '<button class="btn btn-success">Activar</button>'


                }
                $('.grid_services').append('<div class ="col-12 col-sm-12 col-md-6 col-lg-4 my-2">'
                +'<div class="card">'

                    +'<div class="card-header">'
                        +'<h5 class="fst-italic">'+item.nombre_service+'</h5>'
                        +'<p class="fw-bold">'+item.category+'</p>'

                    +'</div>'
                    +'<div class="card-body">'
                        +'<p>Encargado: '+item.persona_encargada+'</p>'
                        +'<p>Descripción: '+item.description+'</p>'
                        +status

                    +'</div>'
                    +'<div class="card-footer text-center">'
                        +'<button class="mx-2 btn btn-warning">Editar</button>'
                        +btn_activar

                    +'</div>'
                +'</div>'
              

                
                
                +'</div>')
            }
        })

    }
    
    draw_Services(id)

    $('.create_service').click(function(){

        location.href = '/registro_servicio'

    })
    
    
    $('.cerrar_sesion').click(function(){
        location.href = "/"
    
        localStorage.removeItem('data_user_service');
    })
       
    })
    
    