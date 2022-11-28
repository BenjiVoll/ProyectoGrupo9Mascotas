const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    rut: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        match:/^[a-zA-ZÀ-ÿ]+(\s*[a-zA-ZÀ-ÿ]*)*[a-zA-ZÀ-ÿ]+$/g,
        minlength:4,
        maxlength:40
    },
    age:{
        type: Number,
        required: true,
        default: '18',
        min:[18, 'why?'],
        max:99
    },
    email: {
        type: String,
        required: true,
        match:/^[a-zA-Z]+@gmail\.com$/,
        default: 'ejemplo@gmail.com'
    },
    telephonenumber:{
        type: Number,
        required: true,
        default: '00000000'
    },
    apartmentnumber:{
        type: Number,
        required: true,
        default: '0000'
    },
    numberpets:{
        type: Number,
        required: true,
        default: '1',
        min:1,
        max:10
    },
    role: {
        type: String,
        enum: [
            'user',
            'admin'
        ],
        default: 'user'
    },
    pet: {
        type: Schema.ObjectId,
         ref: 'pet'
    }
});

module.exports = mongoose.model('users', UsersSchema);