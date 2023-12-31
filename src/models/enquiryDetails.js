const mongoose = require('mongoose');
const EnquirySchema = new mongoose.Schema({
    username: String,
    mobileno: String,
    age: String,
    emailId: String,
    address: String,
    created_date:Date,
    active:String,
    status:String,
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);
module.exports = Enquiry;