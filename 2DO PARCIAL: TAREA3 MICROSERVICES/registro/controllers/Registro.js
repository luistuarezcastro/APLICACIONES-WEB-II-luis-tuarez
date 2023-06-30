const { response } = require('express')
const { Registro } = require('../models')

//CONSULTAR REGISTROS
const getRegistros= async (req, res = response )=>{
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, registros ] = await Promise.all([
        Registro.countDocuments(query),
        Registro.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])

    res.json({
    sum, 
    registros
    })
    
}
//CONSULTAR REGISTRO POR ID
const getRegistro= async (req, res =  response)=>{
    const {id} = req.params
    const registros=  await Registro.findById(id)
    res.json(registros);
}
//CREAR REGISTRO
const createRegistro= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const data = {
        ...body,
        //ES INDISPENSABLE PONER EL ID DEL PLATO Y DEL PACIENTE
        ID_Plato: body.ID_Plato,
        ID_Paciente: body.ID_Paciente,
        fecha: body.fecha,
        hora: body.hora,
        N_Calorias: body.N_Calorias,
        N_Porciones: body.N_Porciones
    }

    const registros = new Registro(data);

    const newRegistro =  await registros.save();
    res.status(201).json(newRegistro);
}
//ACTUALIZAR REGISTRO
const updateRegistro= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedRegistro =  await Registro.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedRegistro);
}
//ELIMINAR REGISTRO
const deleteRegistro= async (req, res = response)=>{
    const {id} = req.params;
    const deletedRegistro =  await Registro.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedRegistro);
}
//EXPORTAR
module.exports = {
    getRegistros,
    getRegistro,
    createRegistro,
    updateRegistro,
    deleteRegistro
};