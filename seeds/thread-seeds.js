const { Thread } = require('../models/Thread');

const threadData =[
    {
      "name" :"WorkGroup",
      "public_visibility" : false,
      "thread_admin":1
    },
    {
        "name" :"friendsGroup",
        "public_visibility" : false,
        "thread_admin":1
    },
    {
        "name" :"friendsGroup",
        "public_visibility" : false,
        "thread_admin":1
    }
  ];


  const seedThreads = () => Thread.bulkCreate(threadData);

module.exports = seedThreads;

  