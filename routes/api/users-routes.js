const router = require('express').Router();
const { PO, Users } = require('../../models');

// GET /api/PO numbers
router.get('/',(req,res) => {
   Users.findAll()
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
//Just doing just the above one for now

// POST /api/PO numbers  <-- This is just get the data in
router.post('/', (req,res) => {
    Users.create({
        password: req.body.password,
        first_name: req.body.first_name
    })
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/login', (req,res) => {
    Users.findOne({
        where: {
            first_name: req.body.first_name
        }
    }).then(dbUsersData => {
        if(!dbUsersData){
            res.status(400).json({message: 'No user with that account name!'});
            return;
        }

        const validPassword = dbUsersData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({message: 'Incorrect password!'});
            return;
        }

        res.json({user: dbUsersData, message: 'You are now logged in!'});
    });
});

module.exports = router;