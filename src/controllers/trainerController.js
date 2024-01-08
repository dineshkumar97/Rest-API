const TrainerDetails = require('../models/trainerDetails');
const Sequence = require('../models/sequenceDetails');
const commonServices = require('../services/commonServices');

exports.createTrainer = async (req, res) => {
    const trainerID = await Sequence.findOne();
    let count = commonServices.createTrainerCount(trainerID.TrainerID)
    const { firstName, lastName, emailId, address, mobileNo, gender } = req.body;
    const mobile = await TrainerDetails.findOne({ mobileNo });
    if (!mobile) {
        updateSequenceCount(trainerID, count)
        const newUser = new TrainerDetails({
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
            address: address,
            mobileNo: mobileNo,
            gender: gender,
            trainerUID: `${'TID-'}${count}`,
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1
        });
        await newUser.save();
        let SuccessMessage = {
            message: 'Trainer Created Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    }
    let errorMessage = {
        message: 'Trainer Already Registered',
        statusCode: 400
    }
    res.status(400).json(errorMessage);
};

exports.updateTrainer = async (req, res) => {
    try {
        const { firstName, lastName, emailId, address, mobileNo, gender, createdDate, trainerUID } = req.body;
        const updateEnquiry = await TrainerDetails.findByIdAndUpdate(req.params.idUser, {
            trainerUID: trainerUID,
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
            address: address,
            mobileNo: mobileNo,
            gender: gender,
            createdDate: createdDate,
            createdBy: null,
            modifiedBy: null,
            modifiedDate: new Date(),
            isDelete: 0,
            isActive: 1
        });

        await updateEnquiry.save();
        let SuccessMessage = {
            message: 'Trainer Updated Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Update Only Sequence Count
updateSequenceCount = async (SequenceDetails, count) => {
    const upateSequence = await Sequence.findByIdAndUpdate(SequenceDetails._id, {
        TrainerID: count,
        createdDate: SequenceDetails.createdDate,
        createdBy: null,
        modifiedBy: null,
        modifiedDate: new Date(),
        isDelete: 0,
        isActive: 1
    });
    await upateSequence.save();
}
