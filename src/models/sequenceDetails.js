const mongoose = require('mongoose');
const SequenceSchema = new mongoose.Schema({
    TrainerID: Number,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    isDelete: Number,
    isActive: Number,
    createdDate:Date
});

const SequenceDetails = mongoose.model('Sequence', SequenceSchema);
module.exports = SequenceDetails;