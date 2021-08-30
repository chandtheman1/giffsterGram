const { Comment } = require('../models/Comment');

const commentData =[
    {
        "content" : "Looks good",
        "thread_id" :1,
    },
    {
       "comment" : "Ok!",
       "thread_id" :2,
      },
  ];


  const seedComments= () => Comment.bulkCreate(commentData);

module.exports = seedComments;

  