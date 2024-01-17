const express = require('express');
const router = express.Router();
const memberSequenceContoller = require('../controllers/memberSequenceController');

router.post('/memberSequence/create', memberSequenceContoller.createMemberSequence);

module.exports = router;