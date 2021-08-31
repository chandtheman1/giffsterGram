const { Model, DataTypes } = require('sequelize');
const { Tag } = require('../models');

const tagData = [
    {
      "name": "fun",
    },
    {
      "name": "sad",
    },
    {
      "name": "laugh",
    },
    {
      "name": "parksandrec",
    },
    {
      "name": "lmao",
    },
    {
      "name": "lol",
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

  