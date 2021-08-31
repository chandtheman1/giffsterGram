
const router = require("express").Router();
const { Tag } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  Tag.create({ 
    ...req.body,
      userId: req.session.userId
  })
  .then(newTag => {
    res.json(newTag);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


router.get("/", withAuth, async(req, res) => {
    try{
      const tagData = await Tag.findAll();
      if(tagData){
        const tags = tagData.map((project) => project.get({ plain: true }));
        res.status(200).json(tags);
      }
    }
    catch(err){
      res.status(500).json(err);
    }
});
  
router.get("/:id", withAuth, async(req, res) => {
    try{
      const tagData = await Tag.findByPk(req.params.id);
     if(!tagData){
        res.status(404).json({ message : 'No tag exists with id!'});
        return;
      }
      const tag= tagData.get({ plain: true });
      res.status(200).json(tag);
    }
    catch(err){
      res.status(500).json(err);
    }
});


router.put('/:id', withAuth, async(req, res) => {

  try{
    const tag = await Tag.update((req.body),{
      where : {
        id: req.params.id,
      },
      // individualHooks: true,
    });
    if(!tag[0]){
      res.status(404).json({ message : 'No Tag exists with id!'});
      return;
    }
    res.status(200).json(tag);

  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async(req, res) => {
    try{
      const affectedRows = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
      if (affectedRows > 0) {
        res.status(200).json(affectedRows);
      } else {
        res.status(404).json({message:"tag not deleted !"});
      }
    }
    catch(err){
      res.status(500).json(err);
    }
});


module.exports = router;