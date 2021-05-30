const PO = require("./PO");
const User = require("./User");
const Company = require("./Company");

// create associations

// Company and PO
PO.hasOne(Company, {
  foreignKey: "po_number",
});

Company.belongsTo(PO, {
  foreignKey: "po_number",
});

// PO and Company
PO.hasMany(Company, {
  foreignKey: "emp_number",
});

Company.belongsTo(PO, {
  foreignKey: "emp_number",
});

module.exports = { PO, User, Company };
