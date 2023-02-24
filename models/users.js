const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    // userid:{
    //     type: String,
    //     required: true,
    //     minlength:5,
    //     maxlength:100
    // },
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    middlename: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    age:{
        type: Number,
        required: true,
    },
    phone:{       
        type:Number,
         required: true,
    }
    
}));

function validateUser(user) {
    const schema = Joi.object({
        // userid:Joi.string().min(5).max(50).required(),
        firstname: Joi.string().min(5).max(50).required(),
        middlename: Joi.string().min(5).max(50),
        lastname: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        phone:Joi.number().min(10).max(10).required(),
        age:Joi.number().min(2).max(3).required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
