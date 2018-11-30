const path = require('path');
const express = require("express");

const router = express.Router();

const villainsData = require('./super-heroes');
const rootDir = require('../helpers/path');


router.get('/villains', (req, res) => {
    const villains = villainsData.villains;

    res.render('villains', {
        formImport: false,
        hasVillains: villains.length > 0,
        itemImport: true,
        pageTitle: 'Our Most Wanted Villains!',
        path: '/villains',
        villainsRoute: true,
        villy: villains
    });
});

router.get('/', (req, res) => {
    res.render('home', {
        formImport: false,
        homePage: true,
        itemImport: true,
        pageTitle: 'Home',
        path: '/'
    });
});

module.exports = router;