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
PO.hasMany(User, {
  foreignKey: "po_number",
});

User.belongsTo(PO, {
  foreignKey: "po_number",
});

module.exports = { PO, User, Company };
