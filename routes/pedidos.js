var express = require('express');
const pedidosController = require('../controllers/pedidosController');
var router = express.Router();
const pedidos = require('../controllers/pedidosController');

/* GET home page. */
router.get('/',pedidosController.index);
router.get('/crear',pedidosController.crear);
router.post('/',pedidosController.guardar);
router.post('/eliminar/:id',pedidosController.eliminar);
router.get('/editar/:id',pedidosController.editar);
router.post('/actualizar',pedidosController.actualizar);

module.exports = router;
