const { PO } = require("../models");

const poData = [
  {
    po_number: 12345,
  },
  {
    po_number: 19050,
  },
  {
    po_number: 19051,
  },
  {
    po_number: 19052,
  },
  {
    po_number: 19053,
  },
];

const seedPOs = () => PO.bulkCreate(poData, { individualHooks: true });

module.exports = seedPOs;
