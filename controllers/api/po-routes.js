const router = require("express").Router();
const { PO } = require("../../models");

// GET /api/PO numbers
router.get("/", (req, res) => {
  PO.findAll()
    .then((dbPOData) => res.json(dbPOData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//NO PO ADDTION HERE STILL.....

// POST /api/PO numbers  <-- This is just get the data in
router.post("/", (req, res) => {
  PO.create({
    po_number: req.body.po_number,
  })
    .then((dbPOData) => res.json(dbPOData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/po number/1  <-- removed used po numbers <-- useful???
router.delete("/:po_number", (req,res) => {
  PO.destroy({
    where: {
      po_number: req.params.po_number,
    },
  })
  .then((dbPOData) => {
    if(!dbPOData){
      res.status(404).json({message:"No po found with this id"});
      return;
    }
    res.json(dbPOData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;
