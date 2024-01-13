const express = require('express');
const router = express.Router();
const planContoller = require('../controllers/planController');
const verifyToken = require('../middleware/verifytoken');

router.post('/plan/create', planContoller.createPlan);
router.get('/plan/getAllPlan', planContoller.getAllPlan);
router.put('/plan/update/:idUser', planContoller.updatePlanList);
router.delete('/plan/delete/:idUser', planContoller.deleteParticularPlan);


module.exports = router;