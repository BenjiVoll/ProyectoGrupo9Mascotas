const express = require('express');
const api = express.Router();
const benefitController= require('../controllers/benefitController');

api.post('/benefit/', benefitController.createBenefit);
api.get('/benefits', benefitController.getBenefits);
api.get('/benefit/search/:id', benefitController.getSpecificBenefit);
api.put('/benefit/update/:id', benefitController.updateBenefit)
api.delete('/benefit/delete/:id', benefitController.deleteBenefit);



module.exports = api;






