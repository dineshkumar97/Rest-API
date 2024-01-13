const express = require('express');
const router = express.Router();
const subscriptionContoller = require('../controllers/subsriptionController');

router.post('/subscription/create', subscriptionContoller.createSubscription);
router.get('/subscription/getAllSubscription', subscriptionContoller.getAllMembership);
router.put('/subscription/update/:idUser', subscriptionContoller.updateMemberListship);
router.delete('/subscription/delete/:idUser', subscriptionContoller.deleteParticularMembership);
router.get('/subscription/:idUser', subscriptionContoller.getParticularMembership);

module.exports = router;