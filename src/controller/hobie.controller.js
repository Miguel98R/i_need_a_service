let hobieModel = require('./../models/hobbies.models')
let apiato = require('apiato')


let ms = new apiato();


let validateObject = {
    name: 'string,mandatory',

}

let options = {}

populationObject = undefined

let userFunctions = {


    createOne: ms.createOne(hobieModel, validateObject, populationObject, options),
    createMany: ms.createMany(hobieModel, validateObject, populationObject, options),

    getOneWhere: ms.getOneWhere(hobieModel, populationObject, options),
    getOneById: ms.getOneById(hobieModel, populationObject, options),
    getMany: ms.getMany(hobieModel, populationObject, options),

    findUpdateOrCreate: ms.findUpdateOrCreate(hobieModel, validateObject, populationObject, options),
    findUpdate: ms.findUpdate(hobieModel, validateObject, populationObject, options),
    updateById: ms.updateById(hobieModel, validateObject, populationObject, options),

    findIdAndDelete: ms.findIdAndDelete(hobieModel, options),
    datatable: ms.datatable(hobieModel, populationObject, ['']),


}

module.exports = userFunctions
