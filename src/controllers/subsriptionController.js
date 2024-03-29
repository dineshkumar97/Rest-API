const Subcription = require('../models/subscriptionDetails');

exports.createSubscription = async (req, res) => {
    const { startDate, endDate, member, plan } = req.body;
    let memberId = member;
    const memberID = await Subcription.findOne({ 'member.id': memberId.id });
    if (!memberID) {
        const newUser = new Subcription({
            member: {
                id: member.id,
                text: member.text,
            },
            plan: {
                id: plan.id,
                text: plan.text,
            },
            startDate: startDate,
            endDate: endDate,
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1
        });
        await newUser.save();
        let SuccessMessage = {
            message: 'Subcription Created Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    }
    let errorMessage = {
        message: 'Subcription Already Registered',
        statusCode: 400
    }
    res.status(400).json(errorMessage);
};



exports.getAllMembership = async (req, res) => {
    try {
        const userDetails = await Subcription.find();
        let json = {
            message: userDetails,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getParticularMembership = async (req, res) => {
    try {
        await Subcription.findById(req.params.idUser).then(x => {
            res.status(200).json({ message: x });
        })

    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};
exports.updateMemberListship = async (req, res) => {
    try {
        const { startDate, endDate, member, plan, createdDate } = req.body;
        const updateEnquiry = await Subcription.findByIdAndUpdate(req.params.idUser, {
            member: {
                id: member.id,
                text: member.text,
            },
            plan: {
                id: plan.id,
                text: plan.text,
            },
            startDate: startDate,
            endDate: endDate,
            createdDate: createdDate,
            createdBy: null,
            modifiedBy: null,
            modifiedDate: new Date(),
            isDelete: 0,
            isActive: 1
        });

        await updateEnquiry.save();
        let SuccessMessage = {
            message: 'Subcription Updated Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteParticularMembership = async (req, res) => {
    try {
        await Subcription.findOneAndDelete({ _id: req.params.idUser }).then(x => {
            let SuccessMessage = {
                message: 'Subcription Deleted Successfully...',
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