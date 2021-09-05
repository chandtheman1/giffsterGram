const { Gif } = require('../models');

const gifData = [
    {
      "like" : 1,
      "dislike": 5,
      "name" : "testing1",
      "author": 1,
      "imageData": "/output/dfshdsfh.gif",
    },
    {
      "imageData" :"/output/dfshdsfh.gif",
      "like" : 1,
      "dislike": 552,
      "name" : "testing2",
      // "comment_id":2,
      "author" :1
    },
    {
      "imageData" :"/output/dsfddddddd.gif",
      "like" : 1,
      "dislike": 12,
      "name" : "testing3",
      // "comment_id":1,
      "author" :1
    },
    {
      "imageData" :"/output/awertterwertw.gif",
      "like" : 1,
      "dislike": 3,
      "name" : "testing4",
      // "comment_id":1,
      "author" :1
    },
];

const seedTags = () => Gif.bulkCreate(gifData);

module.exports = seedTags;