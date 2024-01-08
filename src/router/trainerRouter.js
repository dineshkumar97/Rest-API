const express = require('express');
const router = express.Router();
const trainerContoller = require('../controllers/trainerController');

router.post('/trainer/create', trainerContoller.createTrainer);
// router.get('/member/getAllDetails', trainerContoller.getAllMember);
router.put('/trainer/update/:idUser', trainerContoller.updateTrainer);
// router.delete('/member/delete/:idUser', trainerContoller.deleteParticularMember);
// router.get('/member/:idUser', trainerContoller.getParticularMember);

module.exports = router;