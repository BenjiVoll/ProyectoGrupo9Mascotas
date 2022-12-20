const Specie = require('../models/specie');
const Pet = require('../models/pet');

const createSpecie = (req, res) => {
    const { name } = req.body
    const newSpecie = new Specie({
        name
    })
    newSpecie.save((err, specie) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido crear la especie" })
        }
        return res.status(201).send(specie)
        })
    }

//
const getSpecies = (req, res) => {
    Specie.find({}, (err, specie) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener las especies" })
        }
        return res.status(201).send(specie)
    })
}
//
const getSpecificSpecie = (req, res) => {
    const { id } = req.params
    Specie.findById(id, (err, specie) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar la especie" })
        }
        if (!specie) {
            return res.status(404).send({ message: "No se encontro esa especie" })
        }
        return res.status(201).send(specie)
    })
}
//
const updateSpecie = (req, res) => {
    const { id } = req.params
    Specie.findByIdAndUpdate(id, req.body, (err, specie) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la especie" })
        }
        if (!specie) {
            return res.status(404).send({ message: "No se encontro esa especie a actualizar" })
        }
        return res.status(201).send(specie)
    })
}

//
const deleteSpecie = (req, res) => {
    const { id } = req.params
    Specie.findByIdAndDelete(id, (err, specie) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar la especie" })
        }
        if (!specie) {
            return res.status(404).send({ message: "No se encontro esa especie" })
        }
        return res.status(201).send(specie)
    })
}

module.exports = {
    createSpecie,
    getSpecies,
    getSpecificSpecie,
    updateSpecie,
    deleteSpecie
}