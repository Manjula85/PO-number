const { Company } = require("../models");

const companyData = [
  {
    company_name: "Ipec",
    po_number: 12345,
    emp_number: "GUN01",
  },
  {
    company_name: "Aztec",
    po_number: 19050,
    emp_number: "GUN01",
  },
  {
    company_name: "Action Hydraulics",
    po_number: 19051,
    emp_number: "VIC01",
  },
];

const seedCompanies = () => Company.bulkCreate(companyData, { individualHooks: true });

module.exports = seedCompanies;

