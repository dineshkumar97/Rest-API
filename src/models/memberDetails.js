const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({
    username: String,
    mobileno: String,
    memberId:String,
    age: String,
    emailId: String,
    address: String,
    gender:Number,
    status: String,
    createdDate: Date,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    isDelete: Number,
    isActive: Number
});

const Member = mongoose.model('Member', MemberSchema);
module.exports = Member;