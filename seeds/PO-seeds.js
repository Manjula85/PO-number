const { PO } = require("../models");

const poData = [
  {
    po_number: 13456,
  },
  {
    po_number: 19040,
  },
  {
    po_number: 19041,
  },
  {
    po_number: 19042,
  },
  {
    po_number: 19043,
  },
];

const seedPOs = () => PO.bulkCreate(poData, { individualHooks: true });

module.exports = seedPOs;
