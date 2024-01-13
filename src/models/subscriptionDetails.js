const mongoose = require('mongoose');
const SubscriptionSchema = new mongoose.Schema({
    member: {
        id: String,
        text: String,
    },
    plan: {
        id: String,
        text: String,
    },
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