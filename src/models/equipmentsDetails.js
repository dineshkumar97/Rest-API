const mongoose = require('mongoose');
const EquipmentSchema = new mongoose.Schema({
    equipmentName: String,
    description: String,
    dateOfPurchase: Date,
    quantity: String,
    price: String,
    vendorOrganization: String,
    vendorContact: String,
    vendorAddress: String,
    vendorEmail: String,
    // nextServiceEquipment: String,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    createdDate: Date,
    isDelete: Number,
    isActive: Number
});
const Enquiry = mongoose.model('Equipment', EquipmentSchema);
module.exports = Enquiry;

	