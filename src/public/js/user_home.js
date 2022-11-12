

$(document).ready(function () {

let data_user = JSON.parse(localStorage.getItem('data_user'))
console.log(data_user)

$('.user_name').text(data_user.nombre_user)


$('.cerrar_sesion').click(function(){
    location.href = "/"

    localStorage.removeItem('data_user');
})
   
})

