const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    restPasswordToken: String,
    restPasswordExpire: Date,
});

const UserEmail = mongoose.model('UserEmail', UserSchema);
module.exports = UserEmail;