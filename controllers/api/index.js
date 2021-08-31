const router = require('express').Router();
const imageProcessing = require('./imageProcessing');
const gifPathStorage = require('./gifRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/image', imageProcessing);
router.use('/gif', gifPathStorage);
router.use('/tag', tagRoutes);

module.exports = router;