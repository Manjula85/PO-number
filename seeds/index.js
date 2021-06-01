const seedPOs = require('./po-seeds');
const seedUsers = require('./user-seeds');
const seedCompanies = require('./company-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedPOs();
    console.log('--------------');
    
    await seedUsers();
    console.log('--------------');

    await seedCompanies();
    console.log('--------------');

    process.exit(0);
};

seedAll();