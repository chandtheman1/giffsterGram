
const router = require("express").Router();
const { Gif } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
    Gif.findAll()
      .then(newGif => {
        res.json(newGif);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  

router.post("/", withAuth, (req, res) => {
  Gif.create({ ...req.body, userId: req.session.userId })
    .then(newGif => {
      res.json(newGif);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});





module.exports = router;