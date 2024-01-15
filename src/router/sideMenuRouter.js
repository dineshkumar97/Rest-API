const express = require('express');
const router = express.Router();
const sideMenuController = require('../controllers/sideMenuController');

router.post('/sideMenu/create', sideMenuController.createSideMenu);
router.get('/sideMenu/getAllSideMenu', sideMenuController.getAllSideMenu);


module.exports = router;