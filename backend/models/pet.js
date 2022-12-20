const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PetSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:2,
        maxlength:25
    },
    race: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:2,
        maxlength:40
    },
    diseases: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ\.\,]+(\s*[a-zA-ZÀ-ÿ\.\,]*)*[a-zA-ZÀ-ÿ\.\,]+$/g,
        minlength:2,
        maxlength:250
    },
    sex: {
        type: String,
        required: true,
        enum: [
            'macho',
            'hembra'
        ]
    },
    age: {
        type: Number,
        required: true,
        min:1,
        max:30
    },
    weight: {
        type: Number,
        required: true,
        min:1,
        max:150
    },
    colour: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:4,
        maxlength:50
    },
    species: {
         type: Schema.ObjectId,
         ref: 'species'
    }
},
    {
        timestamps:true,
        versionKey:false,
    }

    //esterilizada(si o no)
);

module.exports = mongoose.model('pet', PetSchema);