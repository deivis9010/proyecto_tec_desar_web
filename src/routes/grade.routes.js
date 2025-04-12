//importando el modulo express
const express = require('express');
//importando el modulo express para crear rutas
const router = express.Router(); 
//importando el controlador con las rutas
const gradesController = require('../controllers/grade.controller');

router.get('/getallgrades', gradesController.getAllGrades);

module.exports = router;