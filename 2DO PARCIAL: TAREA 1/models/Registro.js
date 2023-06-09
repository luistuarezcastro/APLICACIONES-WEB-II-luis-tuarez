const { model, Schema } = require('mongoose');
//ATRIBUTOS DE REGISTRO
const RegistroSchema = Schema(
    {
        ID_Plato: {
            type: Schema.Types.ObjectId,
            ref:'Registro',
            required: [ true, 'La identificacion del plato es obligatoria']
        },
        ID_Paciente: {
            type: Schema.Types.ObjectId,
            ref:'Registro',
            required: [ true, 'La identificacion del paciente es obligatoria']
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        fecha:{
            type: String,
            required: [ true, 'La fecha es obligatoria']
        },
        hora:{
            type:String,
            required: [ true, 'la hora es obligatoria']

        },
        N_Calorias:{
            type:String,
            required: [ true, 'es necesario el numero de calorias para el registro']
        },
        N_Porciones:{
            type:String,
            required: [ true, 'es necesario el numero de porciones para el registro']
        }
    }
);

RegistroSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Registro', RegistroSchema );

