const SideMenu = require('../models/sideMenuDetails');

exports.createSideMenu = async (req, res) => {
    const { name, path, icon,parentId ,displayOrder,hasChild} = req.body;
    const sideMenu = new SideMenu({
        name:name,
        path:path,
        icon:icon,
        parentId:parentId,
        displayOrder:displayOrder,
        hasChild:hasChild,
        createdDate: new Date(),
        createdBy: null,
        modifiedBy: null,
        modifiedDate: null,
        isDelete: 0,
        isActive: 1
    });
    await sideMenu.save();
    let SuccessMessage = {
        message: 'SideMenu Created Successfully...',
        statusCode: 200
    }
    return res.status(201).json(SuccessMessage);
};



exports.getAllSideMenu = async (req, res) => {
    try {
        const sideMenu = await SideMenu.find();
        let json = {
            message: sideMenu,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
