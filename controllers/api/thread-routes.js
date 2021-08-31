
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
      if(tagData){
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
      if(tagData){
        const threads = threadData.get({ plain: true });
        res.status(200).json(threads);
      }
    }
    catch(err){
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
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    }
    catch(err){
      res.status(500).json(err);
    }
});


module.exports = router;