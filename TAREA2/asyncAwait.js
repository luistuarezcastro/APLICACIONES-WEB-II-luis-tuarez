//TUAREZ CASTRO LUIS 6TO B APPWEBII
//Utilizamos los datos de nuestro arreglo los cuales hemos exportado
const {registro, paciente} = require ('./datos')

//Solucion utilizando el AsyncAwait

//async funcion de nuestro registo la cual es nuestra entidad transaccional

    async function findregistro(id){
            const Registro = registro.find(Registro =>Registro.id===id);
            if(!Registro){
                const error = new Error()
                error.message = `¡Lo sentimos! El registro con id: ${id} No fue encontrado  `
                throw error;
            }
            return Registro;
        }

//asyn funcion de nuestros pacientes, la cual se mostraran todos los datos del mismo

    async function findpaciente(id){
                const Paciente = paciente.find(Paciente =>Paciente.id===id);
                if(!Paciente){
                    const error = new Error()
                    error.message = `¡Lo sentimos! El paciente con id: ${id} No fue encontrado  `
                    throw error;
                }
                return Paciente;
            
            }

//Utilizacion del asyncAwait para mostrar la id de registro y la id del paciente
//En base a la id del paciente se motraran los datos del mismo paciente, datos que fueron registrados en la entidad "pacientes"
    (async ()=>{
        try{
            const Registro = await findregistro(2);
            const Paciente = await findpaciente(Registro.idpaciente)
            Registro.Paciente = Paciente;
            //se muestra id de registro y la id del paciente la cual es importante para mluego mostrar todos sus datos en base a esa id
            console.log(`El registro: ${Registro.id} Tiene un paciente con id : ${Registro.idpaciente} `);
            //En base a la idpaciente del registro, mostrara los datos de ese paciente con esa id
            console.log(Paciente);
        }catch(error){
            console.log(error.message)
        }
    })();
