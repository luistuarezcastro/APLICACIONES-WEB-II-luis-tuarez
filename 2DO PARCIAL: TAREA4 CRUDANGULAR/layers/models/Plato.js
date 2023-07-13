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
            type: Number,
            required: [ true, 'La calorias del plato son fundamentales'],
            unique:true,
        },
    }
);

module.exports = model('Plato', PlatoSchema );