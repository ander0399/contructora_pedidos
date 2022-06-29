var express = require('express');
const pedidosController = require('../controllers/pedidosController');
var router = express.Router();
const pedidos = require('../controllers/pedidosController');

/* GET home page. */
router.get('/',function(req,res,next){
  res.send('bienvenido a la constructora');
});

module.exports = router;
