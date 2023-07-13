const { model, Schema } = require('mongoose');
//ATRIBUTOS DE REGISTRO
const RegistroSchema = Schema(
    {
        descripcion:{
            type: String,
            required: [ true, 'La descripcion es necesaria'],
            unique:true
        },
        ID_Plato: {
            type: Schema.Types.ObjectId,
            ref:'Registro',
            required: false
        },
        ID_Paciente: {
            type: Schema.Types.ObjectId,
            ref:'Registro',
            required: false
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

