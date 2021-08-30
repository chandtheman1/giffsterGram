const seedUsers = require('./user-seeds.js');
const seedGifs= require('./gif-seeds.js');
const seedTags = require('./tag-seeds.js');
const seedComments = require('./comment-seeds.js');
const seedThreads = require('./thread-seeds.js');
const seedUserThreads = require('./userThread-seeds.js');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');


  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedGifs();
  console.log('\n----- GIFS SEEDED -----\n');

  await seedComments();
  console.log('\n----- Comment SEEDED -----\n');

  await seedThreads();
  console.log('\n----- Threads SEEDED -----\n');

  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');


  await seedUserThreads();
  console.log('\n----- User Thread SEEDED -----\n');




  process.exit(0);
};

seedAll();
