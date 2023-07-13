const { response } = require('express');
const { Plato } = require('../models');

//CONSULTAR PLATOS GENERAL
const getPlatos = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, platos ] = await Promise.all([
        Plato.countDocuments(query),
        Plato.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
    sum, 
    platos
    })
}
//CONSULTA DE PLATOS POR ID
const getPlato= async (req, res= response)=>{
    const {id} = req.params
    const platos=  await Plato.findById(id);
    res.json(platos);
}
//INSERTAR NUEVOS PLATOS
const createPlatos = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existPlatos =  await Plato.findOne({nombre: body.nombre})

    if (existPlatos)
    {
        return res.status(400).json({
            msg:`El plato ${ existPlatos.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre,
        calorias: body.calorias

    }

    const platos = new Plato(data);

    const newPlatos =  await platos.save();
    res.status(201).json(newPlatos);
}
//ACTUALIZAR PLATOS POR ID
const updatePlatos = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const categoryPlatos =  await Plato.findByIdAndUpdate(id,data, {new: true} )
    res.json(categoryPlatos);
}
//ELIMINAR PLATO POR ID
const deletePlato =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedplatos =  await Plato.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedplatos);
}
//EXPORTAR
module.exports ={
    getPlatos,
    getPlato,
    createPlatos,
    updatePlatos,
    deletePlato
}
