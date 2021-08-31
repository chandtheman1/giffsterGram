const router = require('express').Router();
const imageProcessing = require('./imageProcessing');
const gifPathStorage = require('./gifRoutes');

router.use('/image', imageProcessing);
router.use('/image', gifPathStorage);

module.exports = router;
