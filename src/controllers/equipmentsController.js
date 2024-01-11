const Equipment = require('../models/equipmentsDetails');

exports.createEquipment = async (req, res) => {
    const { equipmentName, description, dateOfPurchase, quantity, price,
        vendorOrganization,vendorContact,vendorAddress,vendorEmail
    } = req.body;
    const equipmentNames = await Equipment.findOne({ equipmentName });
    if (!equipmentNames) {
        const newUser = new Equipment({
            equipmentName: equipmentName,
            description: description,
            dateOfPurchase: dateOfPurchase,
            quantity: quantity,
            price: price,
            vendorOrganization:vendorOrganization,
            vendorContact:vendorContact,
            vendorAddress:vendorAddress,
            vendorEmail:vendorEmail,
            createdDate: new Date(),
            createdBy: null,
            modifiedBy: null,
            modifiedDate: null,
            isDelete: 0,
            isActive: 1
        });
        await newUser.save();
        let SuccessMessage = {
            message: 'Equipment Created Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    }
    let errorMessage = {
        message: 'Equipment Already Registered',
        statusCode: 400
    }
    res.status(400).json(errorMessage);
};



exports.getAllEquipment = async (req, res) => {
    try {
        const userDetails = await Equipment.find();
        let json = {
            message: userDetails,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEquipment = async (req, res) => {
    try {
        const {equipmentName, description, dateOfPurchase, quantity, price,
            vendorOrganization,vendorContact,vendorAddress,vendorEmail,createdDate } = req.body;
        const updateEnquiry = await Equipment.findByIdAndUpdate(req.params.idUser, {
            equipmentName: equipmentName,
            description: description,
            dateOfPurchase: dateOfPurchase,
            quantity: quantity,
            price: price,
            vendorOrganization:vendorOrganization,
            vendorContact:vendorContact,
            vendorAddress:vendorAddress,
            vendorEmail:vendorEmail,
            createdDate: createdDate,
            createdBy: null,
            modifiedBy: null,
            modifiedDate: new Date(),
            isDelete: 0,
            isActive: 1
        });

        await updateEnquiry.save();
        let SuccessMessage = {
            message: 'Equipment Updated Successfully...',
            statusCode: 200
        }
        return res.status(201).json(SuccessMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteParticularEquipment = async (req, res) => {
    try {
        await Equipment.findOneAndDelete({ _id: req.params.idUser }).then(x => {
            let SuccessMessage = {
                message: 'Equipment Deleted Successfully...',
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

exports.getParticularEquipment = async (req, res) => {
    try {
        await Equipment.findById(req.params.idUser).then(x => {
            res.status(200).json({ message: x });
        })

    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

