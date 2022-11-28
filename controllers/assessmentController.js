const Assessment = require('../models/assessment');

const createAssessment = (req, res) => {
    const { controlservice, point, comment } = req.body
    const newAssessment = new Assessment({
        controlservice,
        point,
        comment
    })
    newAssessment.save((err, assessment) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido crear la valoracion" })
        }
        return res.status(201).send(assessment)
        })
    } 

const getAssessments = (req, res) => {
    Assessment.find({}, (err, assessment) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener las valoraciones" })
        }
        return res.status(201).send(assessment)
    })
}

const getSpecificAssessment = (req, res) => {
    const { id } = req.params
    Assessment.findById(id).populate({path: 'controlservice'}).exec ((err, assessment) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar la valoracion" })
        }
        if (!assessment) {
            return res.status(404).send({ message: "No se encontro esa valoracion" })
        }
        return res.status(201).send(assessment)
    })
}

const deleteAssessment = (req, res) => {
    const { id } = req.params
    Assessment.findByIdAndDelete(id, (err, assessment) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar el servicio" })
        }
        if (!assessment) {
            return res.status(404).send({ message: "No se encontro ese servicio" })
        }
        return res.status(201).send(assessment)
    })
}

module.exports = {
    createAssessment,
    getAssessments,
    getSpecificAssessment,
    deleteAssessment
}