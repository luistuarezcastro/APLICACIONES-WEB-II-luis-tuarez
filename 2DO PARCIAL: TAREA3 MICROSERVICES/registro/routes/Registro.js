const { Router } = require('express')
const { check } =  require('express-validator')

const { getRegistros,
    getRegistro,
    createRegistro,
    updateRegistro,
    deleteRegistro
    } = require('../controllers').Registro;

const { validateFields } = require('../middlewares')

const router = Router();
//CONSULTA INDIVIDULA
router.get('/', getRegistros);

//CONSULTA ID
router.get('/:id', [ 
    check('id', 'no es correcto').isMongoId() 
 ]  , getRegistro);

//INSERTAR DATOS
router.post('/',[
    check('ID_Plato', 'id no valido de plato').not().isEmpty(),
    check('ID_Paciente', 'id no valido de paciente').not().isEmpty(),
    check('fecha', 'fecha no valida').not().isEmpty(),
    check('hora', 'hora no valida').not().isEmpty(),
    check('N_Calorias', 'numero de calorias no valido').not().isEmpty(),
    check('N_Porciones', 'numero de porciones no valida').not().isEmpty(),

    validateFields
] , createRegistro)

//ACTUALIZAR
router.put('/:id', updateRegistro)

//ELIMINAR
router.delete('/:id',[
    check('id','no valido').isMongoId()
], deleteRegistro)

module.exports = router;