const express = require('express');
const router = express.Router();
const userEmailController = require('../controllers/userEmailController');
const verifyToken = require('../middleware/verifytoken');

// router.get('/getUserDetails',verifyToken, userEmailController.getUserDetails);
router.get('/getUserDetails',userEmailController.getUserDetails);
router.get('/:idUser', userEmailController.getParticularUser);
router.post('/create', userEmailController.createUser);
router.put('/update/:idUser', userEmailController.updateUserEmail);
router.post('/authenticate', userEmailController.authenticate);



module.exports = router;