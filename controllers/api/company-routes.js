const router = require("express").Router();
const { Company } = require("../../models");

// GET /api/PO numbers  <-- maybe I can set up like a quick find (like in other sites)
router.get("/", (req, res) => {
  Company.findAll({
    attributes: ["company_name", "po_number", "emp_number"],
    order: [["po_number", "DESC"]],
  })
    .then((dbPOData) => res.json(dbPOData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//Just doing just the above one for now

// POST /api/PO numbers  <-- To get the data in when the use inputs it
router.post("/", (req, res) => {
  Company.create({
    company_name: req.body.company_name,
    po_number: req.body.po_number,
    emp_number: req.body.emp_number,
  })
    .then((dbPOData) => res.json(dbPOData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
