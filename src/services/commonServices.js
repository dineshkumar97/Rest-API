const Enquiry = require('../models/enquiryDetails');
exports.getMobileNo = async (mobileno) => {
    const enquiryDetails = await Enquiry.findOne({ mobileno });
    return enquiryDetails
}

exports.create_UUID = async () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    console.log(uuid)
    return uuid;
}

exports.createTrainerCount =  (n) => {
    console.log('nnnnn',n)
    let num = n;
    num++; // adds 1 to num
    console.log('xadddx',num);
    // 9698450642
    return num;
}