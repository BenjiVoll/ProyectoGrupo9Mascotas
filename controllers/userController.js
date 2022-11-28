const User = require('../models/user');

const createUser = (req, res) => {
    const { rut, name, age, email, telephonenumber, apartmentnumber, numberpets,  role, pet} = req.body;
    const newUser = new User({
        rut,
        name,
        age,
        email,
        telephonenumber,
        apartmentnumber,
        numberpets,
        role,
        pet
    });
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido crear el usuario" })
        }
        return res.status(201).send(user)
        })
    }

//
const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener los usuario" })
        }
        return res.status(201).send(user)
    })
}
//
const getSpecificUser = (req, res) => {
    const { id } = req.params
    User.findById(id).populate({ path: 'pet' }).exec((err, user) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar el especie" })
        }
        if (!user) {
            return res.status(404).send({ message: "No se encontro el usuario" })
        }
        return res.status(201).send(user)
    })
}
//
const updateUser = (req, res) => {
    const { id } = req.params
    User.findByIdAndUpdate(id, req.body, (err, user) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar el usuario" })
        }
        if (!user) {
            return res.status(404).send({ message: "No se encontro el usuario a actualizar" })
        }
        return res.status(201).send(user)
    })
}

//
const deleteUser = (req, res) => {
    const { id } = req.params
    User.findByIdAndDelete(id, (err, user) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar el usuario" })
        }
        if (!user) {
            return res.status(404).send({ message: "No se encontro el usuario" })
        }
        return res.status(201).send(user)
    })
}

module.exports = {
    createUser,
    getUsers,
    getSpecificUser,
    updateUser,
    deleteUser
}