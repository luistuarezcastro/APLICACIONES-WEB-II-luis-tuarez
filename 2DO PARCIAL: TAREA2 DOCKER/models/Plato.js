const { model, Schema } = require('mongoose');
//ATRIBUTOS DE LOS PLATOS
const PlatoSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del plato es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        calorias:{
            type: String,
            required: [ true, 'La calorias del plato son fundamentales'],
            unique:true,
        },
    }
);

module.exports = model('Plato', PlatoSchema );