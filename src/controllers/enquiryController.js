const Enquiry = require('../models/enquiryDetails');

exports.createEnquiry = async (req, res) => {
    const { username, mobileno, age, emailId, address } = req.body;
    const mobile = await Enquiry.findOne({ mobileno });
    if (!mobile) {
        const newUser = new Enquiry({
            username: username,
            mobileno: mobileno,
            age: age,
            emailId: emailId,
            address: address,
            status: 'Pending',
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1
        });
        await newUser.save();
        let SuccessMessage = {
            message: 'Enquiry Created Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    }
    let errorMessage = {
        message: 'Enquiry Already Registered',
        statusCode: 400
    }
    res.status(400).json(errorMessage);
};



exports.getAllEnquiry = async (req, res) => {
    try {
        const userDetails = await Enquiry.find();
        let json = {
            message: userDetails,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEnquiryList = async (req, res) => {
    try {
        const { username, mobileno, age, emailId, address, createdDate, active, status } = req.body;
        const updateEnquiry = await Enquiry.findByIdAndUpdate(req.params.idUser, {
            username: username,
            mobileno: mobileno,
            age: age,
            emailId: emailId,
            address: address,
            status: status,
            createdDate: createdDate,
            createdBy: null,
            modifiedBy: null,
            modifiedDate: new Date(),
            isDelete: 0,
            isActive: 1
        });

        await updateEnquiry.save();
        let SuccessMessage = {
            message: 'Enquiry Updated Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteParticularEnquiry = async (req, res) => {
    try {
        await Enquiry.findOneAndDelete({ _id: req.params.idUser }).then(x => {
            let SuccessMessage = {
                message: 'Enquiry Deleted Successfully...',
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