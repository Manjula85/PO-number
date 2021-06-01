const router = require("express").Router();
const sequelize = require("../config/connection");
const { Company, PO, User } = require("../models");

router.get("/", (req, res) => {
  console.log("Session details", req.session);

  if (!req.session.loggedIn) {
    res.redirect("/login");
  }

  PO.findAll({
    attributes: ["po_number"],
  })
    .then((dbPOData) => {
      //pass only a single PO number
      const post = dbPOData[0].get({ plain: true });
      //const posts = dbPOData.map(post => post.get({ plain: true }));
      //const emp_number = 'Manjula';//req.session.emp_number;
      res.render("homepage", {
        post,
        loggedIn: req.session.loggedIn,
        emp_number: req.session.emp_number,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
