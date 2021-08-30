const { UserThread } = require('../models/UserThread');

const userThreadData = [
  {
    user_id: 1,
    thread_id: 2,
  },
  {
    user_id: 2,
    thread_id: 1,
  },
  {
    user_id: 2,
    thread_id: 3,
  },
  {
    user_id: 3,
    thread_id: 3,
  },
  
];

const seedUserThreads = () => UserThread.bulkCreate(userThreadData);

module.exports = seedUserThreads;
