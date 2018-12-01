var express = require('express');
var materiaController = {};
var materiaModel = import('../models/Materia');

materiaController.getAll = function (req, res) {
    materiaModel.find({}, function(err, materias) {
        if (err) {
            res.json({
                code: 500,
                success: false,
                err
            });
        } else {
            res.json({
                code: 200,
                success: true,
            })
            res.json(materias);
        }
    });
};

materiaController.getOne = function (req, res) {
    materiaModel.find({ _id: req.params.id }, function(err, materia) {
        if (err) {
            res.json({
                code: 500,
                success: false,
                err
            });
        } else {
            res.json({
                code: 200,
                success: true,
            })
            res.json(materia);
        }
    });
};
materiaController.store = function (req, res) {
    console.log('random.text');
};

materiaController.update = function (req, res) {
    materiaModel.findByIdAndUpdate({ _id: req.params.id }, function(err, materia) {
        if (err) {
            res.json({
                code: 500,
                success: false,
                err
            });
        } else {
            res.json(materia);
        }
    });
};

materiaController.delete = function (req, res) {
    console.log('random.text');
};

module.exports = materiaController;