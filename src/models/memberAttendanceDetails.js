const mongoose = require('mongoose');
const MemberAttendanceSchema = new mongoose.Schema({
    MemberID: Number,
    username: String,
    mobileno: String,
    emailId: String,
    gender:Number,
    createdDate: Date,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    isDelete: Number,
    isActive: Number
});
const MemberAttendance = mongoose.model('MemberAttendance', MemberAttendanceSchema);
module.exports = MemberAttendance;

	