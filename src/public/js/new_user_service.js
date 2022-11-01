

$(document).ready(function () {


    let nuevo_usuario_sevice = {}

    $('.registro_user_service').click(function () {      


      if($('#name_user_s').val() == '' || $('#name_user_s').val() == undefined){
         
        notyf.error('Ingrese su nombre(S)') 
        
        $('#name_user_s').css("background-color", "yellow");

        return 
      }

      if($('#apellidoPa_user_s').val() == '' || $('#apellidoPa_user_s').val() == undefined){
         
        notyf.error('Ingrese su apellido paterno') 

        $('#apellidoPa_user_s').css("background-color", "yellow");

        return 

      }


      if($('#apellidoMa_user_s').val() == '' || $('#apellidoMa_user_s').val() == undefined){
         
        notyf.error('Ingrese su apellido materno') 

        $('#apellidoMa_user_s').css("background-color", "yellow");

        return 

      }

      if($('#fecha_nacimiento_s').val() == '' || $('#fecha_nacimiento_s').val() == undefined){
         
        notyf.error('Ingrese su fecha de nacimiento') 

        $('#fecha_nacimiento_s').css("background-color", "yellow");

        return 

      }

      if($('#calle_user_s').val() == '' || $('#calle_user_s').val() == undefined){
         
        notyf.error('Escriba la calle de su dirección') 

        $('#calle_user_s').css("background-color", "yellow");

        return 

      }

      if($('#no_ext_s').val() == '' || $('#no_ext_s').val() == undefined){
         
        notyf.error('Escriba el no. ext de su dirección') 

        $('#no_ext').css("background-color", "yellow");

        return 

      }

      if($('#municipio_s').val() == '' || $('#municipio_s').val() == undefined){
         
        notyf.error('Escriba el Municipio  de su dirección') 

        $('#municipio_s').css("background-color", "yellow");

        return 

      }
     
      if($('#municipio_s').val() == '' || $('#municipio_s').val() == undefined){
         
        notyf.error('Escriba el Municipio  de su dirección') 

        $('#municipio_s').css("background-color", "yellow");

        return 

      }

      if($('#estado_s').val() == '' || $('#estado_s').val() == undefined){
         
        notyf.error('Escriba el Estado  de su dirección') 

        $('#estado_s').css("background-color", "yellow");

        return 

      }

      if($('#cp_s').val() == '' || $('#cp_s').val() == undefined){
         
        notyf.error('Escriba el C.P  de su dirección') 

        $('#cp_s').css("background-color", "yellow");

        return 

      }


      if($('#referencia_user_s').val() == '' || $('#referencia_user_s').val() == undefined){
         
        notyf.error('Escriba una referencia para  su dirección') 

        $('#referencia_user_s').css("background-color", "yellow");

        return 

      }
     

      if($('#email_s').val() == '' || $('#email_s').val() == undefined){
         
        notyf.error('Escriba su Email') 

        $('#email_s').css("background-color", "yellow");

        return 

      }

      if($('#pass_s').val() == '' || $('#pass_s').val() == undefined){
         
        notyf.error('Escriba su Contraseña') 

        $('#pass_s').css("background-color", "yellow");

        return 
      }
      
      
      // if($('#opcion_servicio').val() == '' || $('#opcion_servicio').val() == undefined){
         
      //   notyf.error('Seleccione su tipo de servicio') 

      //   $('#opcion_servicio').css("background-color", "yellow");

      //   return 
      // }
     


      let nombre = nombre_user_s = $('#name_user_s').val()
      let apellido_p = $('#apellidoPa_user_s').val()
      let apellido_m = $('#apellidoMa_user_s').val()
      
      nuevo_usuario_sevice.nombre_user_s = nombre +' '+ apellido_p+ ' ' + apellido_m

      nuevo_usuario_sevice.nacimiento_s = $('#fecha_nacimiento_s').val()

      nuevo_usuario_sevice.calle_user_s = $('#calle_user_s').val()
      nuevo_usuario_sevice.no_int = $('#no_int_s').val()
      nuevo_usuario_sevice.no_ext = $('#no_ext_s').val()
      nuevo_usuario_sevice.codigo_postal_s = $('#cp_s').val()
      nuevo_usuario_sevice.municipio_user_s = $('#municipio_s').val()
      nuevo_usuario_sevice.estado_user_s = $('#estado_s').val()
      nuevo_usuario_sevice.referencia_dir = $('#referencia_user_s').val()


      nuevo_usuario_sevice.email = $('#email_s').val()
      nuevo_usuario_sevice.password = $('#pass_s').val()

      // nuevo_usuario_sevice.service = $('#opcion_servicio').val()


      console.log("data new user___",nuevo_usuario_sevice)

    



      api_conection('POST', '/api/user/newUser_service', nuevo_usuario_sevice, function () {
        console.log("Si se pudo")
        notyf.success("Usuario creado")
      },
      function(response){
      })

    })

})

