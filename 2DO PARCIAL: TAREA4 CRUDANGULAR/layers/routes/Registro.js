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
    check('descripcion', 'La descripcion es requerida').not().isEmpty(),
    validateFields
] , createRegistro)

//ACTUALIZAR
router.put('/:id', updateRegistro)

//ELIMINAR
router.delete('/:id',[
    check('id','no valido').isMongoId()
], deleteRegistro)

module.exports = router;