const TrainerDetails = require('../models/trainerDetails');
const Sequence = require('../models/sequenceDetails');
const commonServices = require('../services/commonServices');

exports.createTrainer = async (req, res) => {
    const trainerID = await Sequence.findOne();
    let count = commonServices.createTrainerCount(trainerID.TrainerID)
    const { firstName, lastName, emailId, address, mobileNo, gender,price,quantity } = req.body;
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
            isActive: 1,
            price:price,
            quantity:quantity
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

exports.getAllTrainer = async (req, res) => {
    try {
        const trainerDetail = await TrainerDetails.aggregate([
            {
              $project: {
                trainerUID: 1,
                firstName: 1,
                lastName: 1,
                emailId: 1,
                address: 1,
                mobileNo: 1,
                gender: 1,
                createdDate: 1,
                createdBy: null,
                modifiedBy: null,
                modifiedDate: 1,
                isDelete: 1,
                isActive: 1,
                price:1,
                quantity:1,
                fullName: {$concat: ['$firstName', ' ', '$lastName']},
                totalAdd: { $add: ["$price", "$quantity"] },
                totalsubtract: { $subtract: ["$price", "$quantity"] },
                totalDiv: { $divide: ["$price", "$quantity"] },
                totalMulipt: { $multiply: ["$price", "$quantity"] }
              },
            }
          ]);
        let json = {
            message: trainerDetail,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getParticularTrainer = async (req, res) => {
    try {
        await TrainerDetails.findById(req.params.idUser).then(x => {
            res.status(200).json({ message: x });
        })

    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

exports.deleteParticularTrainer = async (req, res) => {
    try {
        await TrainerDetails.findOneAndDelete({ _id: req.params.idUser }).then(x => {
            let SuccessMessage = {
                message: 'Trainer Deleted Successfully...',
                statusCode: 200
            }
            res.status(200).json(SuccessMessage);
        })
    } catch (err) {
        let errorMessage = {
            message: err.message,
            statusCode: 400
        }
        res.status(400).json(errorMessage);
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
