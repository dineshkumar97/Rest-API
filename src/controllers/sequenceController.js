const SequenceDetails = require('../models/sequenceDetails');

exports.createSequence = async (req, response) => {
    try {
    const { TrainerID } = req.body;
        const member = new SequenceDetails({
            TrainerID: TrainerID,
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1
        });
        await member.save();
        let json = {
            message: 'Sequence Created Successfully...',
            statusCode: 200
        }
        response.status(200).json(json);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

