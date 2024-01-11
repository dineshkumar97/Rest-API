const express = require('express');
const router = express.Router();
const equipmentContoller = require('../controllers/equipmentsController');
const verifyToken = require('../middleware/verifytoken');

router.post('/equipment/create', equipmentContoller.createEquipment);
router.get('/equipment/getAllDetails', equipmentContoller.getAllEquipment);
router.put('/equipment/update/:idUser', equipmentContoller.updateEquipment);
router.delete('/equipment/delete/:idUser', equipmentContoller.deleteParticularEquipment);
router.get('/equipment/:idUser', equipmentContoller.getParticularEquipment);

module.exports = router;