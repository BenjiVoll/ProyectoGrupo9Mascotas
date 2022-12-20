const Benefit = require('../models/benefit');
//const Pet = require('../models/pet');

 const createBenefit = (req, res) => {
    const { name } = req.body
    const newBenefit = new Benefit({
        name
    })
    newBenefit.save((err, benefit) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido crear el servicio" })
        }
        return res.status(201).send(benefit)
        })
    } 

const getBenefits = (req, res) => {
    Benefit.find({}, (err, benefit) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener los servicios" })
        }
        return res.status(201).send(benefit)
    })
}

const getSpecificBenefit = (req, res) => {
    const { id } = req.params
    Benefit.findById(id, (err, benefit) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar el servicio" })
        }
        if (!benefit) {
            return res.status(404).send({ message: "No se encontro ese servicio" })
        }
        return res.status(201).send(benefit)
    })
}

const updateBenefit= (req, res) => {
    const { id } = req.params
    Benefit.findByIdAndUpdate(id, req.body, (err, benefit) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar el servicio" })
        }
        if (!benefit) {
            return res.status(404).send({ message: "No se encontro ese servicio a actualizar" })
        }
        return res.status(201).send(benefit)
    })
}

const deleteBenefit = (req, res) => {
    const { id } = req.params
    Benefit.findByIdAndDelete(id, (err, benefit) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar el servicio" })
        }
        if (!benefit) {
            return res.status(404).send({ message: "No se encontro ese servicio" })
        }
        return res.status(201).send(benefit)
    })
}

module.exports = {
    createBenefit,
    getBenefits,
    getSpecificBenefit,
    updateBenefit,
    deleteBenefit
}