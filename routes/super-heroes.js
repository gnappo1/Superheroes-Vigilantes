const express = require("express");

// eslint-disable-next-line new-cap
const router = express.Router();

const villainsController = require('../controllers/villainsController');

router.get('/report-villain', villainsController.getReportVillain);

router.post('/report-villain', villainsController.postReportVillain);

module.exports = router;