const Plan = require('../models/planDetails');

exports.createPlan = async (req, res) => {
    const { name, description, noOfDays, price } = req.body;
    const mobile = await Plan.findOne({ description });
    if (!mobile) {
        const newUser = new Plan({
            name: name,
            description: description,
            noOfDays: noOfDays,
            price: price,
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1
        });
        await newUser.save();
        let SuccessMessage = {
            message: 'Plan Created Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    }
    let errorMessage = {
        message: 'Plan Already Registered',
        statusCode: 400
    }
    res.status(400).json(errorMessage);
};



exports.getAllPlan = async (req, res) => {
    try {
        const userDetails = await Plan.find();
        let json = {
            message: userDetails,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePlanList = async (req, res) => {
    try {
        const { name, description, noOfDays, price ,createdDate} = req.body;
        const updateEnquiry = await Plan.findByIdAndUpdate(req.params.idUser, {
            name: name,
            description: description,
            noOfDays: noOfDays,
            price: price,
            createdDate: createdDate,
            createdBy: null,
            modifiedBy: null,
            modifiedDate: new Date(),
            isDelete: 0,
            isActive: 1
        });

        await updateEnquiry.save();
        let SuccessMessage = {
            message: 'Plan Updated Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteParticularPlan = async (req, res) => {
    try {
        await Plan.findOneAndDelete({ _id: req.params.idUser }).then(x => {
            let SuccessMessage = {
                message: 'Plan Deleted Successfully...',
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