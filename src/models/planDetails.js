const mongoose = require('mongoose');
const PlanSchema = new mongoose.Schema({
    name: String,
    description: String,
    noOfDays: Number,
    price: String,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    createdDate: Date,
    isDelete: Number,
    isActive: Number
});
const Plan = mongoose.model('Plan', PlanSchema);
module.exports = Plan;

	