const mongoose = require('mongoose');
const SubscriptionSchema = new mongoose.Schema({
    memberID: String,
    memberName: String,
    planID: String,
    planName: String,
    startDate: Date,
    endDate: Date,
    createdDate: Date,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    isDelete: Number,
    isActive: Number
});

const Subcription = mongoose.model('Subcription', SubscriptionSchema);
module.exports = Subcription;