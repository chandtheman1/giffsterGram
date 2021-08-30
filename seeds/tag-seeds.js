const { Tag } = require('../models/Tag');

const tagData =[
    {
      "name" :"fun",
      "isPublic": true,
      "admin" : 1,
    },
    {
        "name" :"work",
        "isPublic": false,
        "admin" : 2,
    },
    {
        "name" :"family",
        "isPublic": false,
        "admin" : 2,
    },
    {
        "name" :"personal",
        "isPublic": false,
        "admin" : 1,
    },
    {
        "name" :"friends",
        "isPublic": true,
        "admin" : 1,
    }
  ];


  const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

  