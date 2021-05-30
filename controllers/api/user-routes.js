const router = require("express").Router();
const { User } = require("../../models");

//GET all users <-- just needed for the testing phase
router.get("/", (req, res) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
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
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.emp_number = dbUserData.emp_number;
        req.session.title = dbUserData.title;
        req.session.first_name = dbUserData.first_name;
        req.session.last_name = dbUserData.last_name;
        req.session.password = dbUserData.password;
        //extra
        req.session.loggedIn = true; // Do I do this?

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      emp_number: req.body.emp_number,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No user found with this empNumnber" });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "incorrect password!" });
        return;
      }

      req.session.save(() => {
        req.session.emp_number = dbUserData.emp_number;
        req.session.password = dbUserData.password;
        //extra
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//logout
router.post("/logout", (req, res) => {
  console.log('LOGOUT');
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
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
