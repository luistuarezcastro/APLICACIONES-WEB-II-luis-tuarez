const { response } = require('express');
const { Paciente } = require('../models');

//CONSULTAR PACIENTES GENERAL
const getPacientes = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, pacientes ] = await Promise.all([
        Paciente.countDocuments(query),
        Paciente.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      pacientes
    })
}
//CONSULTA DE PACIENTES POR ID
const getpaciente = async (req, res= response)=>{
    const {id} = req.params
    const pacientes=  await Paciente.findById(id);
    res.json(pacientes);
}
//INSERTAR PACIENTES
const createPacientes = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existPacientes =  await Paciente.findOne({nombre: body.nombre})

    if (existPacientes)
    {
        return res.status(400).json({
            msg:`El paciente ${ existPacientes.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre,
        identificacion: body.identificacion,
        telefono: body.telefono,
        direccion: body.direccion
    }

    const pacientes = new Paciente(data);

    const newpaciente =  await pacientes.save();
    res.status(201).json(newpaciente);
}
//ACTUALIZAR PACIENTES POR ID
const updatePaciente = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const categoryPaciente=  await Paciente.findByIdAndUpdate(id,data, {new: true} )
    res.json(categoryPaciente);
}
//ELIMINAR PACIENTES POR ID
const deletePaciente =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedPaciente =  await Paciente.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPaciente);
}
//EXPORTAR
module.exports ={
    getPacientes,
    getpaciente,
    createPacientes,
    updatePaciente,
    deletePaciente
}