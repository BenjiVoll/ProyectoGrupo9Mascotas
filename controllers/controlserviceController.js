const ControlService = require('../models/controlservice');

const createControlService = (req, res) => {
    const { namepet, benefit, entrydate, entryhour, nameenter, exitdate, exithour, namewithdraw } = req.body;
    const newControlService = new ControlService({
        namepet,
        benefit,
        entrydate,
        entryhour,
        nameenter,
        exitdate,
        exithour,
        namewithdraw
    });

    newControlService.save((err, controlservice) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido crear el control del servicio" })
        }
        return res.status(201).send(controlservice)
        })
    }


const getControlServices = (req, res) => {
    ControlService.find({}, (err, controlservice) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener el control de servicios" })
        }
        return res.status(201).send(controlservice)
    })
}

const getSpecificControlService = (req, res) => {
    const { id } = req.params
    ControlService.findById(id).populate({path: 'pet benefit'}).exec((err, controlservice) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar el servicio" })
        }
        if (!controlservice) {
            return res.status(404).send({ message: "No se encontro ese servicio" })
        }
        return res.status(201).send(controlservice)
    })
}

const updateControlService= (req, res) => {
    const { id } = req.params
    ControlService.findByIdAndUpdate(id, req.body, (err, controlservice) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la categoria" })
        }
        if (!controlservice) {
            return res.status(404).send({ message: "No se encontro esa categoria a actualizar" })
        }
        return res.status(201).send(controlservice)
    })
}


const deleteControlService= (req, res) => {
    const { id } = req.params
    ControlService.findByIdAndDelete(id, (err, controlservice) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar el servicio" })
        }
        if (!controlservice) {
            return res.status(404).send({ message: "No se encontro esa servicio" })
        }
        return res.status(201).send(controlservice)
    })
}



const findstatuscControl= (req, res) => {
    ControlService.find({ state: 'complete'}, function (err, controlservice) {
        if (err){
            return res.status(400).send({ message: "No se puede mostrar los controles con estado=complete" })
        }
        else{
            return res.status(201).send(controlservice)
        }
    });
    }

const findstatusvControl= (req, res) => {
    ControlService.find({ state: 'valid'}, function (err, controlservice) {
        if (err){
            return res.status(400).send({ message: "No se puede mostrar los controles con estado=valid" })
        }
        else{
            return res.status(201).send(controlservice)
        }
    });
    }


module.exports = {
    createControlService,
    getControlServices,
    getSpecificControlService,
    updateControlService,
    deleteControlService,
    findstatuscControl,
    findstatusvControl,
}