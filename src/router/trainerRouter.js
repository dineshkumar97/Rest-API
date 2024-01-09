const express = require('express');
const router = express.Router();
const trainerContoller = require('../controllers/trainerController');
const verifyToken = require('../middleware/verifytoken');

router.post('/trainer/create', trainerContoller.createTrainer);
router.get('/trainer/getAllDetails', trainerContoller.getAllTrainer);
router.put('/trainer/update/:idUser', trainerContoller.updateTrainer);
router.delete('/trainer/delete/:idUser', trainerContoller.deleteParticularTrainer);
router.get('/trainer/:idUser', trainerContoller.getParticularTrainer);

module.exports = router;