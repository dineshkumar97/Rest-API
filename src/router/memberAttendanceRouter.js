const express = require('express');
const router = express.Router();
const memberAttendanceController = require('../controllers/memberAttendanceController');
router.get('/memberSearch/memberID?', memberAttendanceController.searchMemberList);

module.exports = router;