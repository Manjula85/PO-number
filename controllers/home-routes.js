const router = require('express').Router();
const sequelize = require('../config/connection');
const {Company, PO, User} = require('../models');

router.get('/', (req,res) => {
    PO.findAll({
        attributes: ['po_number']
    })
    .then(dbPOData => {
        //pass only a single PO number
        res.render('homepage',dbPOData[0].get({plain: true}));
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//login
router.get('/login', (req, res) => {
    res.render('login');
});

//signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;