alert("entrado")
$(document).ready(function () {

    $('#save').click(async function () {
        let body = {
            name: $('#name').val(),
            age: $('#age').val(),
            email: 'erssssick' + Math.random(),
            password: 'ssssss' + Math.random()

        }

        let data = await api_rest.setResource('user').createOne(body)
        console.log('la data', data)

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
