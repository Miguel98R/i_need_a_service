$(document).ready(function () {
    let seccion = localStorage.getItem('seccion')
  

    api_conection('POST', '/api/services/getAllServices', {seccion}, 
    
    function (data) {
      
      console.log(data)
    },
    function(response){
      notyf.error(response.message)
    })
    

  
  })
  
  
