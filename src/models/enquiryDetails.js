const mongoose = require('mongoose');
const EnquirySchema = new mongoose.Schema({
    username: String,
    mobileno: String,
    age: String,
    emailId: String,
    address: String,
    status: String,
    createdDate: Date,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    description:String,
    isDelete: Number,
    isActive: Number
});
const Enquiry = mongoose.model('Enquiry', EnquirySchema);
module.exports = Enquiry;

