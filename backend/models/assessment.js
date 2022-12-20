const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AssessmentSchema = new Schema({
    controlservice: {
        type: Schema.ObjectId,
        ref: 'controlservice'
    },
    point: {
        type: Number,
        required: true,
        enum: [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        default: 0
    },
    comment: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:2,
        maxlength:150
    }
})

module.exports = mongoose.model('assessment', AssessmentSchema);