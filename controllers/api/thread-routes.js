
const router = require("express").Router();
const { Thread } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    Thread.create({ ...req.body, userId: req.session.userId })
    .then(newThread => {
      res.json(newThread);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


router.get("/", withAuth, async(req, res) => {
    try{
      const threadData = await Thread.findAll();
      if(threadData){
        const threads = threadData.map((project) => project.get({ plain: true }));
        res.status(200).json(threads);
      }
    }
    catch(err){
      res.status(500).json(err);
    }
});
  
router.get("/:id", withAuth, async(req, res) => {
    try{
      const threadData = await Thread.findByPk(req.params.id);
      if(!threadData){
        res.status(404).json({ message : 'No thread exists with id!'});
        return;
      }
      const thread= threadData.get({ plain: true });
      res.status(200).json(thread);
    }
    catch(err){
      res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async(req, res) => {

  try{
    const thread = await Thread.update((req.body),{
      where : {
        id: req.params.id,
      },
      // individualHooks: true,
    });
    if(!thread[0]){
      res.status(404).json({ message : 'No Thread exists with id!'});
      return;
    }
    res.status(200).json(thread);

  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async(req, res) => {
    try{
      const affectedRows = await Thread.destroy({
        where: {
          id: req.params.id
        }
      });
      if (affectedRows > 0) {
        res.status(200).json(affectedRows);
      } else {
        res.status(404).json({message:"Thread not deleted !"});
      }
    }
    catch(err){
      res.status(500).json(err);
    }
});


module.exports = router;