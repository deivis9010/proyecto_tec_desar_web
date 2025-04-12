const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  grade_id: { type: String},
  class: { type: String},
  grade: { type: Number, default: 0 },
  professor: { type: String,  },
  canRepeatExam: { type: Boolean, default: false },
});

module.exports = mongoose.model('grade', gradeSchema);