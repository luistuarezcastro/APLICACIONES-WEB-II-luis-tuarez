//TUAREZ CASTRO LUIS 6TO B APPWEBII
//Utilizamos los datos de nuestro arreglo los cuales hemos exportado
const {registro, paciente} = require ('./datos')

//Solucion utilizando las promesas

//funcion usando promesas de nuestro registo la cual es nuestra entidad transaccional

function findregistro(id){
    return new Promise((resolve, reject)=>{
        const Registro =registro.find(Registro =>Registro.id===id)
        if(!Registro){
            const error = new Error()
            error.message = `Lo sentimos! El registro con id: ${id} No fue encontrado  `
            reject(error)
        }
        resolve(Registro)
    })
    }

//funcion de nuestros pacientes usando promesas 

function findpaciente(id){
return new Promise((resolve, reject)=>{
    const Paciente = paciente.find(Paciente =>Paciente.id===id)
    if(!Paciente){
        const error = new Error()
        error.message = `Lo sentimos!!! El paciente con id: ${id} No fue encontrado  `
        reject(error)
    }
    resolve(Paciente)
})
}

//Utilizacion de las promesas para mostrar la id de registro y la id del paciente
//En base a la id del paciente se motraran los datos del mismo paciente, datos que fueron registrados en la entidad "pacientes"

    findregistro(4)
    .then((Registro)=>{
        //se muestra id de registro y la id del paciente la cual es importante para mluego mostrar todos sus datos en base a esa id
        console.log(`El registro: ${Registro.id} Tiene un paciente con id : ${Registro.idpaciente} `);
        return findpaciente(Registro.idpaciente)
    })
    .then((Paciente)=>{
        //En base a la idpaciente del registro, mostrara los datos de ese paciente con esa id
        console.log('Datos general del paciente' ,Paciente);
    })
    .catch((error)=>{
        console.log(error.message);
    })
