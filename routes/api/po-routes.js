const router = require('express').Router();
const { PO } = require('../../models');

// GET /api/PO numbers
router.get('/',(req,res) => {
    PO.findAll()
        .then(dbPOData => res.json(dbPOData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
//Just doing just the above one for now

// POST /api/PO numbers  <-- This is just get the data in
router.post('/', (req,res) => {
    PO.create({
        poNumber: req.body.poNumber,
    })
    .then(dbPOData => res.json(dbPOData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/po number/1  <-- removed used po numbers <-- useful???
// Because I can just edit the db, right?

module.exports = router;