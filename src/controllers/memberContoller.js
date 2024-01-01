const Member = require('../models/memberDetails');
// const Enquiry = require('../services/enqiryServices');

exports.createMember = async (req, res) => {
    const { username, mobileno, age, emailId, address, gender } = req.body;
    const mobile = await Member.findOne({ mobileno });
    if (!mobile) {
        // let EnquiryDetails = await Enquiry.getMobileNo(mobileno);
        const member = new Member({
            username: username,
            mobileno: mobileno,
            age: age,
            emailId: emailId,
            address: address,
            gender: gender,
            status: 'Pending',
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1
        });
        await member.save();
        let SuccessMessage = {
            message: 'Member Created Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    }
    let errorMessage = {
        message: 'Member Already Registered',
        statusCode: 400
    }
    res.status(400).json(errorMessage);
};



exports.getAllMember = async (req, res) => {
    try {
        const userDetails = await Member.find();
        let json = {
            message: userDetails,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getParticularMember = async (req, res) => {
    try {
        await Member.findById(req.params.idUser).then(x => {
            res.status(200).json({ message: x });
        })

    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};
exports.updateMemberList = async (req, res) => {
    try {
        const { username, mobileno, age, emailId, address, createdDate, status, gender } = req.body;
        const updateEnquiry = await Member.findByIdAndUpdate(req.params.idUser, {
            username: username,
            mobileno: mobileno,
            age: age,
            emailId: emailId,
            address: address,
            status: status,
            gender: gender,
            createdDate: createdDate,
            createdBy: null,
            modifiedBy: null,
            modifiedDate: new Date(),
            isDelete: 0,
            isActive: 1
        });
        console.log('ddd',)
        await updateEnquiry.save();
        let SuccessMessage = {
            message: 'Member Updated Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteParticularMember = async (req, res) => {
    try {
        await Member.findOneAndDelete({ _id: req.params.idUser }).then(x => {
            let SuccessMessage = {
                message: 'Member Deleted Successfully...',
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