const mongoose = require('mongoose');

//Attributes of the Course object
var userSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    isActive: {
        type: Boolean,
        enum: [false, true],
        default: false
    },
    confirmationCode: {
        type: String,
        unique: true
    },
});

mongoose.model('User', userSchema, 'user');