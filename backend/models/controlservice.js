const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ControlServiceSchema = new Schema({
    namepet: {
        type: Schema.ObjectId,
        ref: 'pet'
    },
    benefit: {
        type: Schema.ObjectId,
        ref: 'benefit'
    },
    entrydate: {
        type: String,
        required: true
    },
    entryhour: {
        type: String,
        required: true
    },
    nameenter: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:4,
        maxlength:40
    },
    exitdate: {
        type: String,
    },
    exithour: {
        type: String,
    },
    namewithdraw: {
        type: String,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:4,
        maxlength:40
    },
    state: {
        type: String,
        enum: [
            'valid',
            'complete'
        ],
        default: "valid"
    },

})
//rut,rut
module.exports = mongoose.model('controlservice', ControlServiceSchema);
