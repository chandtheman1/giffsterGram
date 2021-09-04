const router = require('express').Router();
const { Thread, Tag,Gif,Comment,User} = require('../models/');
const withAuth = require("../../utils/auth");

router.get('/user-thread',withAuth,async(req,res)=>{

    try{
        const threadsData = await Thread.findAll({
            include:[User]
        });

        const threads = threadsData.map((thread)=> thread.get({plain: true}));
        res.json(threads);
        // res.render("all-threads",{ threads});
    }
    catch(err){
        res.status(500).json(err);
    };

});

router.get('/user-thread/:threadId',withAuth,async(req,res)=>{

    try{
        const threadsData = await Thread.findByPk(req.params.threadId,{
            include:[User]
        });

        const threads = threadsData.get({plain: true});
        res.json(threads);
        // res.render("all-threads",{ threads});
    }
    catch(err){
        res.status(500).json(err);
    };

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