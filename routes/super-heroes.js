const path = require('path');
const express = require("express");

const router = express.Router();

const rootDir = require('../helpers/path');

const villains = [];

router.get('/report-villain', (req, res) => {
    res.render('report-villain', {
        formImport: false,
        hasVillains: villains.length > 0,
        itemImport: true,
        pageTitle: 'Our Most Wanted Villains!',
        path: '/admin/report-villain',
        reportVillainActive: true,
        villainsRoute: true,
        villy: villains
    });
});

router.post('/report-villain', (req, res) => {
    villains.push({
        imageUrl: req.body.image,
        name: req.body.name,
        reward: req.body.reward
    });

    res.redirect('/villains');
});

exports.routes = router;
exports.villains = villains;