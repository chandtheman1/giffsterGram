
const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");


router.post("/", withAuth, (req, res) => {
  Comment.create({ ...req.body, userId: req.session.userId })
  .then(newComment => {
    res.json(newComment);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


router.get("/", withAuth, async(req, res) => {
  try{
    const commentData = await Comment.findAll();
    if(commentData){
      const comments = commentData.map((project) => project.get({ plain: true }));
      res.status(200).json(comments);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async(req, res) => {
  try{
    const commentData = await Comment.findByPk(req.params.id);
    if(!commentData){
      res.status(404).json({ message : 'No comment exists with id!'});
      return;
    }
    const comment= commentData.get({ plain: true });
    res.status(200).json(comment);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async(req, res) => {

try{
  const comment = await Comment.update((req.body),{
    where : {
      id: req.params.id,
    },
    // individualHooks: true,
  });
  if(!comment[0]){
    res.status(404).json({ message : 'No comment exists with id!'});
    return;
  }
  res.status(200).json(comment);

}
catch(err) {
  res.status(500).json(err);
}
});

router.delete("/:id", withAuth, async(req, res) => {
  try{
    const affectedRows = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    if (affectedRows > 0) {
      res.status(200).json(affectedRows);
    } else {
      res.status(404).json({message:"comment not deleted !"});
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;