let services_menu = [
  {
  
    title: 'Entretenimiento',
    img:'https://www.deyaalvarezvillajuana.com/wp-content/uploads/2019/02/pol%C3%ADtica-del-entretenimiento-945x610.jpg'

}, 
{

  
    title: 'Belleza',
    img:'https://www.xeouradio.com/wp-content/uploads/2022/09/belleza.jpg'
    
}, 
{

 
    title: 'Hogar',
    img:'https://prodesa.com/wp-content/uploads/2021/05/iStock-1209431211-1.jpg'
   
}, 
{
  
  title: 'Empresarial',
  img:'https://www.marista.edu.mx/files/media/image/program_04079f13161f39bf9eb88d620a1b12a7.jpg'
},
{


  title: 'Autos',
  img:'https://www.eluniversal.com.mx/sites/default/files/2020/03/24/autos_de_lujo.jpg'
  
}, 
{


  title: 'Salud',
  img:'https://unamglobal.unam.mx/wp-content/uploads/2021/03/facSistemas-de-salud-digital.jpg'
 
}, 

{


  title: 'Mascotas',
  img:'https://s1.eestatic.com/2020/08/26/curiosidades/mascotas/mascotas-perros-gatos_515959375_158488465_1706x960.jpg'
 
}, 
]


$(document).ready(function () {

  for (let item of services_menu){

    $('.services_menu').append('<div class="col-4">'
      +'<div class="  my-2 mx-3">'

         
          +'<div class=" bg-transparent container-fluid">'
                +'<img class="card-img" src="'+item.img+'"></img>'
          +'</div>'
          +'<div  class=" my-2 text-center  sombreado " >'
            + '<button style="border: solid; border-color:#2e889a;"  class="btn text-dark">'+item.title+'</button>'
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
