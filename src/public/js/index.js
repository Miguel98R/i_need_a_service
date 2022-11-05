let services_menu = [
  {
  
    title: 'Entretenimiento',
    img:''

}, 
{

  
    title: 'Belleza',
    img:''
    
}, 
{

 
    title: 'Hogar',
    img:''
   
}, 
{
  
  title: 'Empresarial',
  img:''
},
{


  title: 'Autos',
  img:''
  
}, 
{


  title: 'Salud',
  img:''
 
}, 

{


  title: 'Mascotas',
  img:''
 
}, 
]


$(document).ready(function () {

  for (let item of services_menu){

    $('.services_menu').append('<div class="col-4">'
      +'<div class="card my-2 mx-3">'

          +'<div class="card-header" >'
            
          +'</div>'
          +'<div class="card-body">'
                +'<img width="67%" class="img-fluid" src=""></img>'
          +'</div>'
          +'<div class="card-footer text-center" style="background-color: #2e679a;">'
            + '<h5 class="text-white">'+item.title+'</h5>'
          +'</div>'
  
  
      +'</div>'
  +'</div>' )



  }

  



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
