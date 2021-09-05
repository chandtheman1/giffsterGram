const { Comment } = require('../models');

const commentData = [
    {
        "comment_text": "Looks good",
        "author":1,
        "gif_id":1
    },
    {
        "comment_text": "Ok!",
        "author":1,
        "gif_id" :2
    },
    {
        "comment_text": "cool!",
        "author":1,
        "gif_id":1
    },
    {
        "comment_text": "Fun!",
        "author":2,
        "gif_id" :2
    },
];

const seedComments= () => Comment.bulkCreate(commentData);

module.exports = seedComments; 