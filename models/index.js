const PO = require("./PO");
const User = require("./User");
const Company = require("./Company");

// create associations

// PO and Company
PO.hasMany(Company, {
  foreignKey: "emp_number",
});

Company.belongsTo(PO, {
  foreignKey: "emp_number",
});

module.exports = { PO, User, Company };
