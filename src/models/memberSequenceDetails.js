const mongoose = require('mongoose');
const MemberSequenceSchema = new mongoose.Schema({
    MemberID: Number,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    isDelete: Number,
    isActive: Number,
    prefix: String,
    suffix: String,
    createdDate: Date
});

const MemberSequence = mongoose.model('MemberSequence', MemberSequenceSchema);
module.exports = MemberSequence;