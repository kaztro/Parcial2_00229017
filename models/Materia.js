const mongoose = require('mongoose');

var materiaSchema = new mongoose.Schema({
    materia: {type: String, required: true, index: true, unique: true},
    uv: {type: Number, required: true},
    descripcion: {type: String, required: true}
});

module.exports = mongoose.model('Materia', materiaSchema);