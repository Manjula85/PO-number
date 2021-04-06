const router = require('express').Router();

const poRoutes = require('./po-routes');

router.use('/po',poRoutes);

console.log('Inner');

module.exports = router;