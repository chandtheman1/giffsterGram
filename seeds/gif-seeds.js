const { Gif } = require('../models');

const gifData = [
    {
      "path" :"/output/asdjkldasgjkbn.gif",
      "like" : 1,
      "dislike": 8882
    },
    {
      "path" :"/output/dfshdsfh.gif",
      "like" : 1,
      "dislike": 552
    },
    {
      "path" :"/output/dsfddddddd.gif",
      "like" : 1,
      "dislike": 12
    },
    {
      "path" :"/output/awertterwertw.gif",
      "like" : 1,
      "dislike": 3
    },
];

const seedTags = () => Gif.bulkCreate(gifData);

module.exports = seedTags;