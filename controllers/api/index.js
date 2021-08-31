const router = require('express').Router();
const gifRoutes = require('./gif-routes.js');
const commentRoutes = require('./comment-routes.js');
const tagRoutes = require('./tag-routes.js');
const threadRoutes = require('./thread-routes.js');
const userRoutes = require('./user-routes.js');
const imageProcessing = require('./imageProcessing');
const gifPathStorage = require('./gifRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/gif', gifRoutes);
router.use('/comment', commentRoutes);
router.use('/tag', tagRoutes);
router.use('/thread', threadRoutes);
router.use('/user', userRoutes);
router.use('/image', imageProcessing);
router.use('/gif', gifPathStorage);
router.use('/tag', tagRoutes);

module.exports = router;