const express = require('express');
const api = express.Router();
const assessmentController= require('../controllers/assessmentController');

api.post('/assessment/', assessmentController.createAssessment);
api.get('/assessments', assessmentController.getAssessments);
api.get('/assessment/search/:id', assessmentController.getSpecificAssessment);
api.delete('/assessment/delete/:id', assessmentController.deleteAssessment);


module.exports = api;