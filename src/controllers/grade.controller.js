const gradeModel = require('../models/grade.model');
//Obtiene todos los grades
//GET /api/getallgrades
exports.getAllGrades = async (req, res) => {
    const listGrades = await gradeModel.find();
    res.json(listGrades);
};
//Crea un nuevo grade
//POST /api/postcreategrade
exports.postCreateGrade = (req, res) => {
    const newgrade = new gradeModel(req.body);
    newgrade.save()
        .then(savedgrade => res.status(201).json(savedgrade))
        .catch(error => res.status(500).json({ message: 'Error saving the grade', error }));
};
//Obtiene un grade por id
//GET /api/getgrade/:id 
exports.getGradeById = (req, res) => {
    const { id } = req.params;
    gradeModel.findById(id)
        .then(grade => {
            if (!grade) {
                return res.status(404).json({ message: 'Grade not found' });
            }
            res.status(200).json(grade);
        })
        .catch(error => res.status(500).json({ message: 'Error retrieving the grade', error }));
};
//Actualiza un grade por id
//PUT /api/putgrade/:id
exports.putUpdateGrade = (req, res) => {
    const { id } = req.params;
    const {  garede_id,class: className, grade, professor } = req.body;
    gradeModel.updateOne({ _id: id }, { $set: { garede_id,class: className, grade, professor } })
        .then(grade => {
           
            res.json(grade);
        })
        .catch(error => res.status(500).json({ message: 'Error updating the grade', error }));
};
//Elimina un grade por id
//DELETE /api/deletegrade/:id
exports.DeleteGrade = (req, res) => {
    const { id } = req.params;
    gradeModel.deleteOne({ _id: id })
        .then(grade => {
            
            res.json(grade);
        })
        .catch(error => res.status(500).json({ message: 'Error deleting the grade', error }));
};

//Obtiene dado el nombre de un profesor las grade aprobados donde el aprobado es mayor o igual a 5
//GET /api/getapprovedgrade/:nombre
exports.getApprovedGradeById = (req, res) => {
    const { nombre } = req.params;
    gradeModel.find({ professor: nombre, grade: { $gte: 5 } })
        .then(grades => {
            if (!grades || grades.length === 0) {
                return res.status(404).json({ message: 'No approved grades found for this professor' });
            }
            res.json(grades);
        })
        .catch(error => res.status(500).json({ message: 'Error retrieving the grades', error }));
};

//Actualiza si dado un grade_id se puede repetir el examen solo si la nota es menor a 5
//PUT /api/CanRepeatExam/:id
// Este endpoint permite actualizar el campo canRepeatExam de un grade dado su ID.
// Si el grade ya existe y su nota es mayor o igual a 5, no se puede actualizar.
exports.putCanRepeatExam = (req, res) => {
    const { id } = req.params;
    const { canRepeatExam, class: className, grade, professor } = req.body;

    gradeModel.findOne({ grade_id: id })
        .then(existingGrade => {
            if (existingGrade) {
                // Si el grade ya existe y su nota es menor a 5, se puede actualizar canRepeatExam
                console.log('Grade already exists:', existingGrade);
                if (existingGrade.grade >= 5) {
                    return res.status(400).json({ message: 'Cannot update canRepeatExam because the grade is 5 or higher' });
                }

                // Update only canRepeatExam
                existingGrade.canRepeatExam = canRepeatExam;
                return existingGrade.save()
                    .then(updatedGrade => res.status(200).json({ message: 'Grade updated successfully', data: updatedGrade }));
            }

            // Si el grade no existe, se crea uno nuevo si la nota es menor a 5
            if (grade >= 5) {
                return res.status(400).json({ message: 'Cannot create grade because the grade is 5 or higher' });
            }

            const newGrade = new gradeModel({
                grade_id: id,
                class: className,
                grade,
                professor,
                canRepeatExam
            });

            return newGrade.save()
                .then(savedGrade => res.status(201).json({ message: 'Grade created successfully', data: savedGrade }));
        })
        .catch(error => res.status(500).json({ message: 'Error processing the request', error }));
};

// Elimina todos los grades por un profesor dado su nombre
// DELETE /api/deleteByProfessor/:professor
exports.deleteByProfessor = (req, res) => {
    const { professor } = req.params;

    gradeModel.find({ professor: professor })
        .then(grades => {
            if (!grades || grades.length === 0) {
                // No grades encontrados para el profesor
                return res.status(204).send(); // No Content
            }

            // Borrar todos los grades del profesor
            return gradeModel.deleteMany({ professor: professor })
                .then(() => res.status(200).json({ message: `Grades deleted successfully for professor ${professor}` }));
        })
        .catch(error => {
            res.status(500).json({ message: 'Error processing the delete request', error });
        });
};

