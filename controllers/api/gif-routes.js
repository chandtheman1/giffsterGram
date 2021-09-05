const router = require('express').Router();
const { Gif, Comment, User } = require('../../models');
const withAuth = require("../../utils/auth");

// ROUTE ./api/gif

router.get('/:id', async (req, res) => {
  const gifData = await Gif.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Comment,
        attributes: ['comment_text', 'author'],
        include: {
          model: User,
          attributes: ["username"]
        }
      }
    ]
  });

  // res.json(gifData);
  const newGifData = gifData.get({plain: true});
  const gif = gifData.imageData.toString('base64');

  res.render('commentPage', {
    newGifData, gif
  });
});

router.post("/", withAuth, (req, res) => {
  Gif.create({
    ...req.body,
    author: req.session.userId
  })
    .then(newGif => {
      res.json(newGif);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


router.get("/", withAuth, async (req, res) => {
  try {
    const gifData = await Gif.findAll();
    if (gifData) {
      const gifs = gifData.map((project) => project.get({ plain: true }));
      res.status(200).json(gifs);
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const gifData = await Gif.findByPk(req.params.id);
    if (!gifData) {
      res.status(404).json({ message: 'No Gif exists with id!' });
      return;
    }
    const gif = gifData.get({ plain: true });
    res.status(200).json(gif);
  }
  catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {

  try {
    const gif = await Gif.update((req.body), {
      where: {
        id: req.params.id,
      },
      // individualHooks: true,
    });
    if (!gif[0]) {
      res.status(404).json({ message: 'No Gif exists with id!' });
      return;
    }
    res.status(200).json(gif);

  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const affectedRows = await Gif.destroy({
      where: {
        id: req.params.id
      }
    });
    if (affectedRows > 0) {
      res.status(200).json(affectedRows);
    } else {
      res.status(404).json({ message: "Gif not deleted !" });
    }
  }
  catch (err) {
    res.status(500).json(err);
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