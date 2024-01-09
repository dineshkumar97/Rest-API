const mongoose = require('mongoose');
const TrainerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    address: String,
    mobileNo: String,
    trainerUID: String,    //trainerUID is Unique ID
    gender:Number,
    createdDate: Date,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    isDelete: Number,
    isActive: Number,
    price:Number,
    quantity:Number,
    
});

const Trainer = mongoose.model('Trainer', TrainerSchema);
module.exports = Trainer;