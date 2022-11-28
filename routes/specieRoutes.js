const express = require('express');
const api = express.Router();
const specieController = require('../controllers/speciesController');

api.post('/specie/', specieController.createSpecie);
api.get('/species', specieController.getSpecies);
api.get('/specie/search/:id', specieController.getSpecificSpecie);
api.put('/specie/update/:id', specieController.updateSpecie);
api.delete('/specie/delete/:id', specieController.deleteSpecie);

module.exports = api;