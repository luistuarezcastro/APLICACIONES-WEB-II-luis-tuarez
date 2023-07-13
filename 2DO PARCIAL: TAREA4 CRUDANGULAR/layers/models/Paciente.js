const { model, Schema } = require('mongoose');

//ATRIBUTOS DE PACIENTE
const PacienteSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del paciente es necesario'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        identificacion:{
            type: Number,
            required: [ true, 'La identificacion del paciente es necesario'],
            unique:true,
        },
        telefono:{
            type: Number,
            required: [ true, 'el telefono del paciente es necesario'],
            unique:true,
        },
        direccion:{
            type: String,
            required: [ true, 'La idireccion del paciente es necesaria'],
            unique:true,
        }
        
    }
);

module.exports = model('Paciente', PacienteSchema );