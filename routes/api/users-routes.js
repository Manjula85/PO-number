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


module.exports = router;