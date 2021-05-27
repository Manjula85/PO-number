const router = require("express").Router();
const { User } = require("../../models");

// GET/api/users/1
router.get("/:emp_number", (req, res) => {
  User.findOne({
    where: {
        emp_number: req.params.emp_number,
    },
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => {
      if (!dbuserData) {
        res.status(404).json({ message: "No user found with this empNumnber" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST/api/users
router.post("/", (req, res) => {
  User.create({
    emp_number: req.body.emp_number,
    title: req.body.title,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//User update ignored for now

// DELETE/api/users/1  <-- For just in case for now.....
router.delete("/:emp_number", (req, res) => {
  User.destroy({
    where: {
      emp_number: req.params.emp_number,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this emp_number" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
