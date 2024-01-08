const express = require('express');
const router = express.Router();
const memberContoller = require('../controllers/memberController');
const verifyToken = require('../middleware/verifytoken');

router.post('/member/create', memberContoller.createMember);
router.get('/member/getAllDetails', memberContoller.getAllMember);
router.put('/member/update/:idUser', memberContoller.updateMemberList);
router.delete('/member/delete/:idUser', memberContoller.deleteParticularMember);
router.get('/member/:idUser', memberContoller.getParticularMember);

module.exports = router;