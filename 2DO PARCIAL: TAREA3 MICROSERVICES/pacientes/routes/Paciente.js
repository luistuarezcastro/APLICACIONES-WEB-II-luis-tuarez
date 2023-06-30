const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getPacientes,
    getpaciente,
    createPacientes,
    updatePaciente,
    deletePaciente
} = require('../controllers').Paciente;

const { validateFields } = require('../middlewares')

const router= Router();

//CONSULTA GENERAL
router.get('/', getPacientes );

//CONSULTA INDIVIDUAL
router.get('/:id'
,check('id', 'Este no es un ID valido').isMongoId()
 , getpaciente );

 //INSERTAR DATOS
 router.post('/',[
    check('nombre', 'El nombre del pacientes es necesario').not().isEmpty(),
    check('identificacion', 'La identificacion es necesaria').not().isEmpty(),
    check('telefono', 'el telefono es necesario').not().isEmpty(),
    check('direccion', 'La direccion es necesaria').not().isEmpty(),
    validateFields
], createPacientes);

//ACTUALIZAR
 router.put('/:id', updatePaciente);

 //ELIMINAR
 router.delete('/:id',[
    check('id','Debe ser un id valido').isMongoId()
], deletePaciente);

module.exports = router;