const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    getPlatos,
    getPlato,
    createPlatos,
    updatePlatos,
    deletePlato
    } = require('../controllers').Plato;

const { validateFields } = require('../middlewares')

const router = Router();


//CONSULTA GENERALL
router.get('/', getPlatos);

//CONSULTA INDIVIDUAL
router.get('/:id', [ 
    check('id', 'Este no es un ID correcto').isMongoId() 
 ]  , getPlato);

//INSERTAR
router.post('/',[
    check('nombre', 'El nombre es necesario').not().isEmpty(),
    check('calorias', 'Las calorias son necesarias').not().isEmpty(),
    validateFields
] , createPlatos)

//ACTUALIZAR
router.put('/:id', updatePlatos)

//ELIMINAR
router.delete('/:id',[
    check('id','Debe ser un id valido').isMongoId()
], deletePlato)

module.exports = router;