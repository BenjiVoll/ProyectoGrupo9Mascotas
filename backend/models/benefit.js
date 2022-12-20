const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BenefitSchema = new Schema({
    name: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:5,
        maxlength:60
    }
})

///^([a-zA-Z]+( [a-zA-Z]+)+)$/i



module.exports = mongoose.model('benefit', BenefitSchema);
