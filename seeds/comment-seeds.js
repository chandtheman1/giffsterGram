const { Comment } = require('../models');

const commentData = [
    {
        "content": "Looks good",
    },
    {
        "content": "Ok!",
    },
];

const seedComments= () => Comment.bulkCreate(commentData);

module.exports = seedComments; 