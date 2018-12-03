const path = require('path');

const express = require("express");

const router = express.Router();

const villainsController = require('../controllers/villainsController');

router.get('/villains', villainsController.getVillains);

router.get('/', villainsController.getHome);

module.exports = router;