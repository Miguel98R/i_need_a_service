let userModel = require('./../models/user.models')
let hobiModel = require('./../models/hobbies.models')
let apiato = require('apiato')


let ms = new apiato();


let validateObject = {
    name: 'string,mandatory',
    age: 'number',
}
let populationObject = {
    hobbies: hobiModel
}
let options = {}


let userFunctions = {

    /*  createOne: async function (req, res) {
          try {
              let {body} = req
              let newUser = new userModel(body)
              newUser = await newUser.save()

              res.status(200).json({
                  code: 200, message: 'ok', data: newUser

              })
          } catch (e) {
              console.error(e)
              res.status(500).json({
                  code: 500, message: 'erro', error: e

              })
          }

      }*/
    createOne: ms.createOne(userModel, validateObject, populationObject, options),
    createMany: ms.createMany(userModel, validateObject, populationObject, options),

    getOneWhere: ms.getOneWhere(userModel, populationObject, options),
    getOneById: ms.getOneById(userModel, populationObject, options),
    getMany: ms.getMany(userModel, populationObject, options),

    findUpdateOrCreate: ms.findUpdateOrCreate(userModel, validateObject, populationObject, options),
    findUpdate: ms.findUpdate(userModel, validateObject, populationObject, options),
    updateById: ms.updateById(userModel, validateObject, populationObject, options),

    findIdAndDelete: ms.findIdAndDelete(userModel, options),
    datatable: ms.datatable(userModel, populationObject, ['']),


}

module.exports = userFunctions
