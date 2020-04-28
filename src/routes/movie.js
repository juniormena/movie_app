const express = require('express');
const Moviecontroller = require('../controllers/moviecontroller');
const router  = express.Router();

//API endpoints para actor
router.get('/movie', Moviecontroller.list);
router.get('/movie/:id', Moviecontroller.listOne);
router.post('/movie', Moviecontroller.guardar);
router.put('/movie/editar/:id', Moviecontroller.editar);



module.exports = router;