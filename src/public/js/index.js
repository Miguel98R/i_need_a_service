const notyf = new Notyf()

$(document).ready(function () {



    $('#guardar_user').click(async function () {
        let nuevo_usuario = {
            nombre_user: $('#nombre_user').val(),
            edad: $('#edad_user').val(),
            email: $('#email_user').val(),
            password: $('#password_user').val()

        }

        let data = await api_rest.setResource('user').createOne(nuevo_usuario)
        if(data){
            notyf.success("Usuario creado")
            setTimeout(function(){
                window.location.reload();
             }, 1500);
            
            
           

        }
            
            

    })

})


let uri = '/' //Base uri of APIed-Piper project
let base_path = 'api/' //base path of APIed-Piper project

let api_rest = new codeRagSdk(uri, base_path)


let main = async function () {
    // the first method you must to execute is the discover
    await api_rest.discover()

}
main()
