const { Thread } = require('../models');

const threadData = [
  {
    "name": "WorkGroup",
    "public_visibility": false,
  },
  {
    "name": "friendsGroup",
    "public_visibility": false,
  },
  {
    "name": "friendsGroupdsafgasd",
    "public_visibility" : false,
  }
];

const seedThreads = () => Thread.bulkCreate(threadData);

module.exports = seedThreads;

  