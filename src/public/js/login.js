
  
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
             location.href="/"
            
          },
          
          function(response){
            notyf.error(response.message)
            
          })
      
  
    })
  
  })
  
  
