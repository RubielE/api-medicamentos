var express = require('express');
var router = express.Router();
var rute = require('../app/controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/medicamentos/crear', rute.medicamento.crear);
router.get('/medicamentos/listar', rute.medicamento.listar);
router.put('/medicamentos/editar/:_id', rute.medicamento.editar);
router.delete('/medicamentos/eliminar/:_id', rute.medicamento.eliminar);

module.exports = router;
