var express = require('express');
var materiaController = {};
var materiaModel = import('../models/Materia');

materiaController.getAll = function (req, res) {
    materiaModel.find({}, function(err, materias) {
        if (err) {
            res.json({
                status: 500,
                success: false,
                err
            });
        } else {
            res.json({
                status: 200,
                success: true,
            })
             return res.json(materias);
        }
    });
};

materiaController.getOne = function (req, res) {
    materiaModel.find({ _id: req.params.id }, function(err, materia) {
        if (err) {
            res.json({
                status: 500,
                success: false,
                err
            });
        } else {
            res.json({
                status: 200,
                success: true,
            })
             return res.json(materia);
        }
    });
};
materiaController.store = function (req, res) {
    data = {
        materia: req.body.value,
        uv: req.body.value,
        descripcion: req.body.value
    };
    materiaModel.create(data, function(err, data) {
        if (err) {
            res.json({
                status: 400,
                success: false,
                err
            });
        } else {
            res.json({
                status: 200,
                success: true,
            })
             return res.json(data);
        }
    });
};
/*
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
*/
materiaController.delete = function (req, res) {
    materiaModel.findByIdAndRemove({_id: req.params.id}, function(err, oldData) {
        if (err) {
            res.json({
                status: 400,
                success: false,
                err
            });
        } else {
            res.json({
                status: 200,
                success: true,
            })
             return res.json(oldData);
        }
    });
};

module.exports = materiaController;