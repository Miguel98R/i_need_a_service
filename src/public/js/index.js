let services_menu = [
  {
  
    title: 'Entretenimiento',
    img:'https://cdn-icons-png.flaticon.com/512/3981/3981054.png',
    val:'entretenimiento'

}, 
{

  
    title: 'Belleza',
    img:'https://cdn-icons-png.flaticon.com/512/2377/2377470.png',
    val:"belleza"
    
}, 
{

 
    title: 'Hogar',
    img:'https://cdn-icons-png.flaticon.com/512/1476/1476182.png',
    val:'hogar'
   
}, 
{
  
  title: 'Empresarial',
  img:'https://cdn-icons-png.flaticon.com/512/2760/2760963.png',
  val:'empresarial'
},
{


  title: 'Autos',
  img:'https://cdn-icons-png.flaticon.com/512/741/741407.png',
  val:'autos'
  
}, 
{


  title: 'Salud',
  img:'https://cdn-icons-png.flaticon.com/512/4310/4310163.png',
  val:'salud'
 
}, 

{


  title: 'Mascotas',
  img:'https://cdn-icons-png.flaticon.com/512/3460/3460407.png',
  val:'mascotas'
 
}, 
]


$(document).ready(function () {

  for (let item of services_menu){

    $('.services_menu').append('<div class="col-6 col-sm-6 col-md-4">'
      +'<div class=" card sombreado shadow  my-2 mx-2">'

         
          +'<div class=" bg-transparent ">'
                +'<img class="img-fluid" style="max-height:280px;" src="'+item.img+'"></img>'
          +'</div>'
          +'<div  class="  text-center   " >'
            + '<button value="'+item.val+'" style=" background-color:#2e889a; width:100%;height:100%;"  class="seccion fw-bold btn text-white">'+item.title+'</button>'
          +'</div>'
  
  
      +'</div>'
  +'</div>' )



  }

  $(document.body).on('click','.seccion',function(){
    let value = $(this).val()
    localStorage.setItem('seccion',value)
    location.href ='/seccion/'+value

  })


  let nuevo_usuario = {}

  $('#guardar_user').click(function () {      

    nuevo_usuario.nombre_user = $('#nombre_user').val()
    nuevo_usuario.edad = $('#edad_user').val()
    nuevo_usuario.email = $('#email_user').val()
    nuevo_usuario.password = $('#password_user').val()

    console.log(nuevo_usuario)

   
    api_conection('POST', '/api/user/newUser', nuevo_usuario, 
    
    function (response) {
      
      notyf.success(response.message)
    },
    function(response){
      notyf.success(response.message)
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
