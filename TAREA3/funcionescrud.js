//Este archivo requiere los datos guardados en el archivo datoentidades,js
const {platos, pacientes, registro} = require ('./datoentidades')

//CRUD GUARDAR: funcion asignada para la entidad platos
async function guardarplatos(nombre){
    try {
        const platosnuevos = new platos({
            nombre: nombre
        });
        const saveplatos = await platosnuevos.save();
        console.log("EL PLATO DE COMIDA HA SIDO GUARDADO");
        
    } catch (error) {
        console.log(error)
    }
}

//CRUD EDITAR: funcion asignada para la entidad platos
async function editarplatos(id, nombre){
    try {
        await platos.findByIdAndUpdate(id, {
            nombre: nombre
        });
        console.log("EL PLATO DE COMIDA HA ACTUALIZADO");

    } catch (error) {
        console.log(error)
    }
}

//CRUD ELIMINAR: funcion asignada para la entidad platos
async function eliminarplatos(id){
    try {
        await platos.findByIdAndDelete(id);
        console.log("PLATO BORRADO");
        
    } catch (error) {
        console.log(error)
    }
}

//CRUD GUARDAR: funcion asignada para la entidad pacientes
async function guardarpacientes(nombre, identificacion, edad, telefono){
    try {
        const pacientenuevo = new pacientes({
            nombre: nombre,
            identificacion: identificacion,
            edad: edad,
            telefono: telefono

        })
        const savepacientes = await pacientenuevo.save();
        console.log("SE HA GUARDADO EL PACIENTE");

    } catch (error) {
        console.log(error)
    }
}

//CRUD EDITAR: funcion asignada para la entidad pacientes
async function editarpacientes (id, nombre, identificacion, edad, telefono){
    try {
        await pacientes.findByIdAndUpdate(id, {
            nombre: nombre,
            identificacion: identificacion,
            edad: edad,
            telefono: telefono
        });
        console.log("SE HA ACTUALIZADO EL PACIENTE");

    } catch (error) {
        console.log(error)
    }
}

//CRUD ELIMINAR: funcion asignada para la entidad pacientes
async function eliminarpacientes(id){
    try {
        await pacientes.findByIdAndDelete(id);
        console.log("PACIENTE BORRADO");
        
    } catch (error) {
        console.log(error)
    }
}

//CRUD GUARDAR: funcion asignada para la entidad REGISTRO
async function guardarregistro(idplatos, idpacientes, fecha, hora, numero_calorias, porciones){
    try {
        const registroenuevo = new registro({
            idplatos: idplatos,
            idpacientes: idpacientes,
            fecha: fecha,
            hora: hora,
            numero_calorias: numero_calorias,
            porciones: porciones

        })
        const saveregistro = await registroenuevo.save();
        console.log("SE HA GUARDADO EL REGISTRO REALIZADO");

    } catch (error) {
        console.log(error)
    }
}

//CRUD EDITAR: funcion asignada para la entidad registro
async function editarregistro(idregistro, idplatos, idpacientes, fecha, hora, numero_calorias, porciones){
    try {
        const editregistro = await registro.findByIdAndUpdate(idregistro,{
            idplatos: idplatos,
            idpacientes: idpacientes,
            fecha: fecha,
            hora: hora,
            numero_calorias: numero_calorias,
            porciones: porciones
        });
        console.log("EL REGISTRO SE HA ACTUALIZADO");

    } catch (error) {
        console.log(error)
    }
}

//CRUD ELIMINAR: funcion asignada para la entidad pacientes
async function eliminarregistro(idregistro){
    try {
        const deleteregistro = await registro.findByIdAndDelete(idregistro);
        console.log("REGISTRO BORRADO");
        
    } catch (error) {
        console.log(error)
    }
}

//LISTA DE PACIENTES USANDO EL CICLO FOREACH
async function foreachpacientes(){
try {
    const variable = await pacientes.find();
    console.log("****LISTA DE PACIENTES****")
    variable.forEach((value) =>{
        console.log(`id: ${value._id}`);
        console.log(`Nombre: ${value.nombre}`);
        console.log(`Identificacion: ${value.identificacion}`);
        console.log(`edad: ${value.edad}`);
        console.log(`telefono: ${value.telefono}`);
    });
    
} catch (error) {
    console.log('Error en la lista de pacientes', error);
}
}

//LISTA DE PLATOS USANDO WHILE
async function whileplatos(){
    try {
        const Platoscomida = await platos.find();
        let n = 0;
        console.log("****LISTA DE PLATOS****")
        while (n < Platoscomida.length){
            console.log(`id: ${Platoscomida[n]._id}`);
            console.log(`id: ${Platoscomida[n].nombre}`);
            n++;
        }
    } catch (error) {
        console.log('Error en la lista de platos', error);
    }
}

//LISTA DE REGISTRO USANDO FOROF
async function forofregistro(){
    try {
        const Registros = await registro.find().populate('idplatos idpacientes');
        console.log("****LISTA DE REGISTROS****")
        for(const ficha of Registros){
        console.log(`id: ${ficha._id}`);
        console.log(`plato: ${ficha.idplatos.nombre}`);
        console.log(`paciente: ${ficha.idpacientes.nombre}`);
        console.log(`Fecha: ${ficha.fecha}`);
        console.log(`Hora: ${ficha.hora}`);
        console.log(`numero de calorias: ${ficha.numero_calorias}`);
        console.log(`porciones: ${ficha.porciones}`);
        }

    } catch (error) {
        console.log('Error en la lista de platos', error);
    }
}

//EXPORTACION DE MODULOS
module.exports = {
    guardarplatos,
    editarplatos,
    eliminarplatos,
    guardarpacientes,
    editarpacientes,
    eliminarpacientes,
    guardarregistro,
    editarregistro,
    eliminarregistro,
    foreachpacientes,
    whileplatos,
    forofregistro
};
