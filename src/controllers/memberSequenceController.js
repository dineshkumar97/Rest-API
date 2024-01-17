const MemberSequenceDetails = require('../models/memberSequenceDetails');

exports.createMemberSequence = async (req, response) => {
    try {
    const { MemberID } = req.body;
        const member = new MemberSequenceDetails({
            MemberID: MemberID,
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1,
            prefix: "GYM ",
            suffix: null
        });
        await member.save();
        let json = {
            message: 'Member Sequence Created Successfully...',
            statusCode: 200
        }
        response.status(200).json(json);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

