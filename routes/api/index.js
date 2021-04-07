const router = require('express').Router();

const poRoutes = require('./po-routes');
const usersRoutes = require('./users-routes');

router.use('/po',poRoutes);
router.use('/users',poRoutes);

module.exports = router;