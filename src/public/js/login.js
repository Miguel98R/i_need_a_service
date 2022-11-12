
  
  $(document).ready(function () {
  


    $('.login').click(function () {  
        let email = $('.user').val()    
        let password = $('.password').val() 
        
        if(email == '' || email == undefined){
          notyf.open({type:'warning',message:'Ingrese el email'})

            return
        }

        if(password == '' || password == undefined){
            notyf.open({type:'warning',message:'Ingrese la contraseña'})
              return
        }
        
        let type_user = 'cliente'

        console.log(email)
        console.log(password)


        api_conection('POST', '/api/user/login', {email,password,type_user}, 
        
          function (response) {
             notyf.success(response.message)

            let data_user =  response.data
   
            localStorage.setItem("data_user", JSON.stringify (data_user));
            location.href="/home_user"
            
          },
          
          function(response){
            notyf.error(response.message)
            
          })
      
  
    })
  
  })
  
  
