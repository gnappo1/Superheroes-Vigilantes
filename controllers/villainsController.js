const Villain = require('../models/villain');

exports.getVillains = (req, res) => {

    const villains = Villain.fetchAll((villainss) => {
        res.render('villains', {
            formImport: false,
            hasVillains: villainss.length > 0,
            itemImport: true,
            pageTitle: 'Our Most Wanted Villains!',
            path: '/villains',
            villainsRoute: true,
            villy: villainss
        });
    });

    return villains;
};

exports.getHome = (req, res) => {
    res.render('home', {
        formImport: false,
        homePage: true,
        itemImport: true,
        pageTitle: 'Home',
        path: '/'
    });
};


exports.getReportVillain = (req, res) => {

    res.render('report-villain', {
        formImport: false,
        itemImport: true,
        pageTitle: 'Our Most Wanted Villains!',
        path: '/admin/report-villain',
        reportVillainActive: true,
        villainsRoute: true
    });
};

exports.postReportVillain = (req, res) => {
    const villain = new Villain(req.body.image, req.body.name, req.body.reward);

    villain.save();
    res.redirect('/villains');
};