const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js')

router.use('/api', apiRoutes);
router.use('/home', homeRoutes);

module.exports = router;