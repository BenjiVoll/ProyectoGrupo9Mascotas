const express = require('express');
const api = express.Router();
const controlserviceController = require('../controllers/controlserviceController');

api.post('/controlservice/', controlserviceController.createControlService);
api.get('/controlservices', controlserviceController.getControlServices);
api.get('/controlservice/search/:id', controlserviceController.getSpecificControlService);
api.put('/controlservice/update/:id', controlserviceController.updateControlService);
api.delete('/controlservice/delete/:id', controlserviceController.deleteControlService);
api.get('/statuscControl', controlserviceController.findstatuscControl);
api.get('/statusvControl', controlserviceController.findstatusvControl);

module.exports = api;