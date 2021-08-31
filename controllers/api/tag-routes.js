const router = require('express').Router();
const { Tag } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const data = await Tag.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(404).json(err);
    }
  });

  module.exports = router;