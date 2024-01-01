const Member = require('../models/memberDetails');
const Enquiry = require('../services/enqiryServices');
const EnquiryDetails = require('../models/enquiryDetails');

exports.createMember = async (req, response) => {
    const {  mobileno} = req.body;
    const mobile = await Member.findOne({ mobileno });
    if (!mobile) {
        let EnquiryDetails = await Enquiry.getMobileNo(mobileno);
        createMember(req.body, response, EnquiryDetails, mobile);
    }
    else {
        let errorMessage = {
            message: 'Member Already Registered',
            statusCode: 400
        }
        response.status(400).json(errorMessage);
    }
};

createMember = async (json, response, EnquiryDetails, mobile) => {
    const member = new Member({
        username: json.username,
        mobileno: json.mobileno,
        age: json.age,
        emailId: json.emailId,
        address: json.address,
        gender: json.gender,
        status: 'Pending',
        createdDate: new Date(),
        createdBy: null,
        modifiedBy: null,
        modifiedDate: null,
        isDelete: 0,
        isActive: 1
    });
    await member.save();
    if (EnquiryDetails) {
        updateEnquiryOnce(EnquiryDetails)
    }
    let SuccessMessage = {
        message: 'Member Created Successfully...',
        statusCode: 200
    }
    return response.status(201).json(SuccessMessage);
}


updateEnquiryOnce = async (EnquiryDetail) => {
    const updateEnquiry = await EnquiryDetails.findByIdAndUpdate(EnquiryDetail._id, {
        username: EnquiryDetail.username,
        mobileno: EnquiryDetail.mobileno,
        age: EnquiryDetail.age,
        emailId: EnquiryDetail.emailId,
        address: EnquiryDetail.address,
        status: 'Registered',
        createdDate: EnquiryDetail.createdDate,
        createdBy: EnquiryDetail.createdBy,
        modifiedBy: EnquiryDetail.modifiedBy,
        modifiedDate: EnquiryDetail.modifiedDate,
        isDelete: EnquiryDetail.isDelete,
        isActive: EnquiryDetail.isActive
    });
    await updateEnquiry.save();
}

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