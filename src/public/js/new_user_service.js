const notyf = new Notyf()

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

