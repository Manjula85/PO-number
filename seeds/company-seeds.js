const { Company } = require("../models");

const companyData = [
  {
    company_name: "Ipec",
    po_number: 12345,
  },
  {
    company_name: "Aztec",
    po_number: 19050,
  },
  {
    company_name: "Action Hydraulics",
    po_number: 19051,
  },
];

const seedCompanies = () => Company.bulkCreate(companyData, { individualHooks: true });

module.exports = seedCompanies;

