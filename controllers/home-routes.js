const router = require('express').Router();
const {  Gif,Comment,User} = require('../models/');
const withAuth = require("../utils/auth");

// get all comments for logged in user

// create commnets  with a gifId---working!!--localhost:3001/home/comment/2 
router.post("/comment/:gifId",  (req, res) => {

  const gifId =parseInt(req.params.gifId);
  Comment.create({ 
    ...req.body, 
    // author: req.session.userId ,
    gif_id: gifId
  })
  .then(newComment => {
    res.json(newComment);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


// get all comments of  gifs for logged in user
router.get('/comments/:gifId',(req,res)=>{
  const gifId =parseInt(req.params.gifId);
  Comment.findAll({
    where: {
      // author: req.session.userId ,
      gif_id: gifId
    }
  })
    .then((dbcommentData) => {
      const comments = dbcommentData.map((comment) => comment.get({ plain: true }));
      // console.log(comments)
      if(comments.length > 0){
        res.status(200).json(comments);
        //res.render("all-gifs", { gifs });
      } else {
        res.status(404).json({message:"No comments found!!"});
      }
      
    })
    .catch((err) => {
      res.status(500).json(err);
    });

});


router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });
  
  module.exports = router;