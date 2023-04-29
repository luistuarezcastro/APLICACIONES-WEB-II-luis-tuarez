const mongoose = require('mongoose');
//CONECCION CON MONGODB ATLAS CON LA CUENTA DE LUIS TUAREZ
const CadenaConexion = "mongodb+srv://luisito006tc:luisito006tc@cluster0.uz3rtds.mongodb.net/TAREA3LTC";

//CONECTAR EN BASE A FUNCION ASYNC, EN CASO DE QUE NO SE CONECTE SALDRA ERROR
(async ()=>{

    try{
    await mongoose.connect(CadenaConexion)
    }catch(error){
        console.log(error);
    }
})()

//ENTIDAD DE NUESTROS PLATOS
const platos = mongoose.model("platos",{nombre:String});


//ENTIDAD DE NUESTROS PACIENTES
const pacientes = mongoose.model("pacientes",{
    nombre:String,
    identificacion:String,
    edad:String,
    telefono:String,
});


//ENTIDAD TRANSACCIONAL REGISTRO
//RELACION CON PLATOS Y PACIENTES EN BASE A SU ID
const registro = mongoose.model("registro",{
    idplatos: {type:mongoose.Types.ObjectId, ref:"platos"},
    idpacientes: {type:mongoose.Types.ObjectId, ref:"pacientes"},
    fecha:String,
    hora:String,
    numero_calorias:String,
    porciones:String,
});

//EXPORTACION DE LOS MODULOS CREADOS (PLATOS, PACIENTE Y REGISTROS) PARA USAR EN EL CRUD
//TODO EL CRUD SE ENCONTRARA EN EL ARCHIVO FUNCIONESCRUD
module.exports ={
    platos,
    pacientes,
    registro,
}
