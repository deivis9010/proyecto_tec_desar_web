const gradeModel = require('../models/grade.model');

exports.getAllGrades = async (req, res) => {
    const listGrades = await gradeModel.find( );
    res.json(listGrades);
  };