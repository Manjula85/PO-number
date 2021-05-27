const router = require('express').Router();
const { User } = require('../../models');

// GET/api/users/1
router.get('/:empNumber', (req,res) => {
    User.findOne({
        where: {
            empNumber: req.params.empNumber
        }
    })
    .then(dbUserData => {
        if(!dbuserData){
            res.status(404).json({message: 'No user found with this empNumnber'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST/api/users
router.post('/', (req,res) => {
    User.create({
        empNumber: req.body.empNumber,
        title: req.body.title,
        first_name: req.body.first_name,
        last_name = req.body.last_name,
        password: req.body.password        
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//User update ignored for now

// DELETE/api/users/1
router.delete('/:empNumber', (req,res) => {
    User.destroy({
        where: {
            empNumber: req.params.empNumber
        }
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({message: 'No user found with this empNumber'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;