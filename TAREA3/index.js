//NUESTRAS FUNCIONES NECESARIAS
const {
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
} = require ('./funcionescrud')

//RELIZAR EL CRUD
//GUARDAR EN BASE DE DATOS
guardarplatos("tarta de calabaza");
guardarpacientes("luis tuarez","1316286291","20 años","0939486877");
guardarplatos("encebollado");
guardarpacientes("gabriela Castro","1316289861","32 años","0937887210");
guardarregistro("colocar la id del plato de comida", "colocar la id del paciente", "23/5/2020", "13:07", "400 cal", "2 porciones")

//EDITAR EN BASE DE DATOS
editarplatos("colocar la id del plato de comida", "tarta de chocolate");
editarpacientes("colocar la id del paciente", "LUIS CASTRO", "1316289821", "19 años", "0983782911" );
editarregistro("colocar la id del registro","colocar la id del plato de comida", "colocar la id del paciente", "10/7/2019", "14:07", "900 cal", "3 porciones");

//ELIMINAR EN BASE DE DATOS
eliminarplatos("colocar la id del plato de comida");
eliminarpacientes("colocar la id del paciente");
eliminarregistro("colocar la id del registro");

//MOSTRAR POR LISTA TODOS LOS ELEMENTOS
whileplatos();
foreachpacientes();
forofregistro();
