const mongoose = require('mongoose');
const SideMenuSchema = new mongoose.Schema({
    name: String,
    path: String,
    icon: String,
    parentId: String,
    displayOrder: Number,
    hasChild: Boolean,
    createdDate: Date,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Date,
    isDelete: Number,
    isActive: Number
});

const SideMenu = mongoose.model('SideMenu', SideMenuSchema);
module.exports = SideMenu;