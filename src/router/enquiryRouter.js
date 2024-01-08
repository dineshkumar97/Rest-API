const express = require('express');
const router = express.Router();
const enquiryContoller = require('../controllers/enquiryController');
const verifyToken = require('../middleware/verifytoken');

router.post('/enquiry/create', enquiryContoller.createEnquiry);
router.get('/enquiry/getAllDetails', enquiryContoller.getAllEnquiry);
router.put('/enquiry/update/:idUser', enquiryContoller.updateEnquiryList);
router.delete('/enquiry/delete/:idUser', enquiryContoller.deleteParticularEnquiry);


module.exports = router;