const Enquiry = require('../models/enquiryDetails');
exports.getMobileNo = async (mobileno) => {
    const enquiryDetails = await Enquiry.findOne({ mobileno });
    return enquiryDetails
}