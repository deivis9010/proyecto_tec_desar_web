//importando el modulo express
const express = require('express');
//importando el modulo express para crear rutas
const router = express.Router(); 
//importando el controlador con las rutas
const gradesController = require('../controllers/grade.controller');

//Definiendo las rutas de la aplicacion

router.get('/getallgrades', gradesController.getAllGrades);
router.post('/postcreategrade', gradesController.postCreateGrade);
router.get('/getgrade/:id', gradesController.getGradeById);
router.put('/putgrade/:id', gradesController.putUpdateGrade);
router.delete('/deletegrade/:id', gradesController.DeleteGrade);
router.get('/getapprovedgrade/:nombre', gradesController.getApprovedGradeById);
router.put('/CanRepeatExam/:id', gradesController.putCanRepeatExam);
router.delete('/deleteByProfessor/:professor', gradesController.deleteByProfessor);

module.exports = router;