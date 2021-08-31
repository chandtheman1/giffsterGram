
const router = require("express").Router();
const { Gif } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  Gif.create({ 
    ...req.body,
      userId: req.session.userId
  })
  .then(newGif => {
    res.json(newGif);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


router.get("/", withAuth, async(req, res) => {
    try{
      const gifData = await Gif.findAll();
      if(gifData){
        const gifs = gifData.map((project) => project.get({ plain: true }));
        res.status(200).json(gifs);
      }
    }
    catch(err){
      res.status(500).json(err);
    }
});
  
router.get("/:id", withAuth, async(req, res) => {
    try{
      const gifData = await Gif.findByPk(req.params.id);
     if(!gifData){
        res.status(404).json({ message : 'No Gif exists with id!'});
        return;
      }
      const gif= gifData.get({ plain: true });
      res.status(200).json(gif);
    }
    catch(err){
      res.status(500).json(err);
    }
});


router.put('/:id', withAuth, async(req, res) => {

  try{
    const gif = await Gif.update((req.body),{
      where : {
        id: req.params.id,
      },
      // individualHooks: true,
    });
    if(!gif[0]){
      res.status(404).json({ message : 'No Gif exists with id!'});
      return;
    }
    res.status(200).json(gif);

  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async(req, res) => {
    try{
      const affectedRows = await Gif.destroy({
        where: {
          id: req.params.id
        }
      });
      if (affectedRows > 0) {
        res.status(200).json(affectedRows);
      } else {
        res.status(404).json({message:"Gif not deleted !"});
      }
    }
    catch(err){
      res.status(500).json(err);
    }
});


module.exports = router;