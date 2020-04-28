const express = require('express');
const Actorcontroller = require('../controllers/actorcontroller');
const router  = express.Router();

//API endpoints para actor
router.get('/actor', Actorcontroller.list);
router.get('/actorandmovie/:id', Actorcontroller.listMovieandActors);
router.get('/actor/:id', Actorcontroller.listOne);
router.post('/actor', Actorcontroller.guardar);
router.put('/actor/editar/:id', Actorcontroller.editar);




module.exports = router;