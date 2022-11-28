const express = require('express');
const api = express.Router();
const petController = require('../controllers/petController');

api.post('/pet', petController.createPet);
api.get('/pets', petController.getPets);
api.get('/pet/search/:id', petController.getSpecificPet);
api.put('/pet/update/:id', petController.updatePet);
api.delete('/pet/delete/:id', petController.deletePet);

module.exports = api;