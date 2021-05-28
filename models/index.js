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

// PO and User
User.hasMany(PO, {
  foreignKey: "emp_number",
});

PO.belongsTo(User, {
  foreignKey: "emp_number",
});

module.exports = { PO, User, Company };
