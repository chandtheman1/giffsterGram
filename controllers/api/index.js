const router = require('express').Router();
const imageProcessing = require('./imageProcessing');

router.use('/image', imageProcessing);

module.exports = router;
