const express = require('express');
const router = express.Router();
const sequenceContoller = require('../controllers/sequenceController');

router.post('/sequence/create', sequenceContoller.createSequence);
// router.post('/sequence/update', sequenceContoller.createSequence);


module.exports = router;