const router = require("express").Router();

const poRoutes = require("./po-routes");
const userRoutes = require("./user-routes");
const companyRoutes = require("./company-routes");

router.use("/po", poRoutes);
router.use("/users", userRoutes);
router.use("/companies", companyRoutes);

module.exports = router;
