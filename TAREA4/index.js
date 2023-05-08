const cors = require("cors")
const express = require("express")

const app = express();
//Utilizare el puerto 8081 (no tengo disponible del 8080)
const PUERTO = 8081;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public'))

//Para este ejemplo utilizare mi entidad de Registro (transaccional)
let registro = []

//REST
//GET o CONSULTAR (TODO)
app.get('/tarea4',(req, res)=>{
    res.status(200).json(registro)
})

//GET o CONSULTAR (INDIVIDUAL)
app.get('/:id',(req, res)=>{
    const {id} = req.params;
    const registerselect = registro.filter(p=> p.id === id)
    if (registerselect.length>0)
    {
        return res.status(200).send(registerselect[0])
    }
    res.status(404).send({
        //Mensaje sin exito
        message:"el id del registro insertado no existe"
    })
})

//POST o INSERTAR
app.post('/tarea4', (req, res)=>{

    const {body} = req; 
    registro.push(body)
    res.status(200).send({
        //Mensaje con exito
        message: 'Datos insertado sin problemas',
        response: body
    })
})

//PUT O PATCH - ACTUALIZAR
app.put('/tarea4',(req, res)=>{
    const {id, id_plato, id_paciente, fecha, hora, calorias_consumidas, porciones} = req.body
    const register = registro.filter(p=>p.id === id) [0] || {}
    //entidades a acutalizar
    register.id_plato = id_plato;
    register.id_paciente = id_paciente;
    register.fecha = fecha;
    register.hora = hora;
    register.calorias_consumidas = calorias_consumidas;
    register.porciones = porciones;
    res.status(200).send({
        //Mensaje con exito
        message: 'Modificacion insertada con exito',
        response: register
    })

})
//DELETE
app.delete('/:id',(req, res)=>{
    const {id} = req.params;
    registro = registro.filter(p=> p.id !== id)
    res.status(200).send({
        //Mensaje con exito
        message: `el registro con id: ${id} ha sido eliminado`
    })
})
app.listen(PUERTO, ()=>{
    console.log('server running in port 8081');
})
