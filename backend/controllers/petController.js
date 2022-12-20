const Pet = require('../models/pet')

const createPet = (req, res) => {
    const { user,name, race, diseases, sex, age, weight,colour, species} = req.body;
    const newPet = new Pet({
        user,
        name,
        race,
        diseases,
        sex,
        age,
        weight,
        colour,
        species
    });
    newPet.save((err, pet) => {
        if (err) {
            return res.status(400).send({ message: "Error al guardar la informacion mascota" })
        }
        return res.status(201).send(pet)
    })
}
const getPets = (req, res) => {
    Pet.find({}, (err, pets) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener las mascotas" })
        }
        return res.status(200).send(pets)
    })
}

const getSpecificPet = (req, res) => {
    const { id } = req.params;
    Pet.findById(id).populate({ path: 'species' }).exec((err, pet) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener informacion de la mascota" })
        }
        if (!pet) {
            return res.status(404).send({ message:"Informacion no encontrada de la mascota" })
        }
        return res.status(200).send(pet)
    })
}

const updatePet = (req, res) => {
    const { id } = req.params;
    Pet.findByIdAndUpdate(id, req.body, (err, pets) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la informacion de la mascota" })
        }
        if (!pets) {
            return res.status(404).send({ message: "No se encontro la mascota" })
        }
        return res.status(200).send(pets)
    })
}

const deletePet = (req, res) => {
    const { id } = req.params;
    Pet.findByIdAndDelete(id, (err, pets) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar la mascota" })
        }
        if (!pets) {
            return res.status(404).send({ message: "Informacion de la mascota no encontrada" })
        }
        return res.status(200).send(pets)
    })
}

module.exports = {
    createPet,
    getPets,
    getSpecificPet,
    updatePet,
    deletePet
}
