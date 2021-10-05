const mongoose = require('mongoose');

// Creating Schema for the user
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true    // Timestamps is used here to check when it is created or not
});

// Creating model of userSchema
const User = mongoose.model('User', userSchema);

module.exports = User;