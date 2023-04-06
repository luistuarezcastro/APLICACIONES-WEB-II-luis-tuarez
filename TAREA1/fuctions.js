//importamos nuestros objetos guardado en nuestro arrays para utilizarlos en las funciones
const {platos, paciente, registro} = require ('./arrays')

//mostramos mediante funcion los platos de comida registrados
function tomarplatosdecomida()
{
console.log('    \n -----PLATOS DE COMIDA----- \n')
    platos.forEach(platos => {
console.log(`Id del Plato: ${platos.id} Nombre del Plato de Comida: ${platos.name} `)
    });
}

//mostramos mediante funcion los pacientes registrados
function tomarpacientes()
{
    console.log('    \n -----PACIENTES----- \n')
    let conta=0;
    while (conta < paciente.length){
console.log(" ID del Paciente :"+paciente[conta].id+" Nombre del Paciente:"+paciente[conta].name+" Identicacion:"+paciente[conta].identification);
    conta++;

}}

//mostramos mediante funcion los registros incluyendo el id tanto del plato como del paciente
function tomarregistros()
{
console.log('    \n -----REGISTRO----- \n')
for (const iterator of registro)
{
    const registroauxiliar = platos.find(ele=>ele.id===iterator.idplato)//relacion entre platos y registro
    const registroauxiliar2 = paciente.find(elem=>elem.id===iterator.idpaciente)//relacion entre paciente y registro
console.log(` Registro numero: ${iterator.id} Id del Plato: ${registroauxiliar.id} Paciente: ${registroauxiliar2.id} Nombre del Plato: ${registroauxiliar.name} Fecha: ${iterator.fecha} Hora: ${iterator.hora} Numero de Calorias Consumidas: ${iterator.Ncalorias_consumidas} Porciones: ${iterator.Nporciones}`)
}}

//modulo para exportar dichas funciones y se muestren en el index
module.exports = {
    tomarplatosdecomida,
    tomarpacientes,
    tomarregistros
};













