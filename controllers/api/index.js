const router = require('express').Router();

const gifRoutes = require('./gif-routes.js');
const userRoutes = require('./user-routes.js');
const imageProcessing = require('./imageProcessing');
const commentRoutes = require('./comment-routes.js');

router.use('/gif', gifRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/image', imageProcessing);

module.exports = router;