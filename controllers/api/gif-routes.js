const router = require('express').Router();
const { Gif, Thread, Tag, Comment, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const data = await Gif.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(404).json(err);
    }
  });

// Store new Gif
router.post('/storeGif', (req, res) => {
    /* req.body should look like this...
      {
        name: "what-is-love.gif",
        path: "/output/test.gif",
        tagIds: [1, 2, 3, 4]
      }
    */
    Gif.create(req.body)
      .then((gif) => {
        // if there's product tags, we need to create pairings to bulk create in the ProductTag model
        if (req.body.tagIds.length) {
          const tagIdArr = req.body.tagIds.map((tag_id) => {
            return {
              gif_id: gif.id,
              tag_id,
            };
          });
          return Tag.bulkCreate(tagIdArr);
        }
        // if no product tags, just respond
        res.status(200).json(gif);
      })
      .then((tagIds) => res.status(200).json(tagIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

module.exports = router;