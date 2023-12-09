const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    restPasswordToken: String,
    restPasswordExpire: Date,
});

const User = mongoose.model('User', UserSchema);
module.exports = User;