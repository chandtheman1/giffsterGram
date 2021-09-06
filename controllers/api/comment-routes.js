
const router = require("express").Router();

const { Comment,Gif } = require("../../models/");
const withAuth = require("../../utils/auth");

// ROUTE ./api/comment

//to create comment record 
// router.post("/", withAuth, async (req, res) => {
//   Comment.create({ ...req.body, author: req.session.userId })
//   .then(newComment => {
//     res.json(newComment);
//   })
//   .catch(err => {
//     res.status(500).json(err);
//   });
// });

router.post('/', withAuth, async (req, res) => {
  const newComment = await Comment.create({
    comment_text: req.body.comment_text,
    gif_id: req.body.gif_id,
    author: req.session.userId
  });

  res.json(newComment);
});



// to get all the comments if the user logged in for all tags---working --localhost:3001/api/comment/
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

// to get  a comment if the user logged in  by id---working --localhost:3001/api/comment/2
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