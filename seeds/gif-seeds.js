const { Gif } = require('../models/Gif');

const gifData =[
    {
      "image" :"",
      "tag_id": 1,
      "like" : 1,
      "dislike":2
    },
    {
        "image" :"",
        "tag_id": 2,
        "like" : 6,
        "dislike":2
      },
  ];


  const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

  