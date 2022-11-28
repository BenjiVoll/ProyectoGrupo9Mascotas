const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SpecieSchema = new Schema({
    name: {
        type: String,
        required: true,
        match: /^[a-zA-Z]+$/i,
    }
})

module.exports = mongoose.model('specie', SpecieSchema);
