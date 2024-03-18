let express = require('express');
let router = express.Router();
let bandas = require('../db/index');
let bandasControllers = require('../controllers/bandasControllers')


// Rutas:
// Una ruta principal que deberá mostrar el listado de bandas.
router.get('/', bandasControllers.listadoBandas)

// Una ruta que reciba un id y muestre la banda que tenga ese id como valor.
router.get('/:id', bandasControllers.detalleBandas)

// Una ruta que reciba un género y muestre las bandas que pertenecen a ese género.
router.get('/porGenero/:genero', bandasControllers.porGenero)


module.exports = router;