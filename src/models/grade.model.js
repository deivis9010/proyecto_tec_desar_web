const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  grade_id: String,
  class: { type: String},
  grade: { type: Number, default: 0 },
  professor: { type: String,  },
});

module.exports = mongoose.model('grade', gradeSchema);