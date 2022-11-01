

$(document).ready(function () {

  //$('#services').append('')




  let nuevo_usuario = {}

  $('#guardar_user').click(function () {      

    nuevo_usuario.nombre_user = $('#nombre_user').val()
    nuevo_usuario.edad = $('#edad_user').val()
    nuevo_usuario.email = $('#email_user').val()
    nuevo_usuario.password = $('#password_user').val()

    console.log(nuevo_usuario)

   
    api_conection('POST', '/api/user/newUser', nuevo_usuario, function () {
      console.log("Si se pudo")
      notyf.success("Usuario creado")
    })

  })

})


 // let data = await api_rest.setResource('user').createOne(nuevo_usuario)
        // if(data){
        //     notyf.success("Usuario creado")
        //     setTimeout(function(){
        //         window.location.reload();
        //      }, 1500);}
            


// let uri = '/' //Base uri of APIed-Piper project
// let base_path = 'api/' //base path of APIed-Piper project

// let api_rest = new codeRagSdk(uri, base_path)


// let main = async function () {
//     // the first method you must to execute is the discover
//     await api_rest.discover()

// }
// main()
