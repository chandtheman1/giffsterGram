const seedUsers = require('./user-seeds.js');
const seedGifs= require('./gif-seeds.js');
const seedComments = require('./comment-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedGifs();
  console.log('\n----- GIFS SEEDED -----\n');

  await seedComments();
  console.log('\n----- Comment SEEDED -----\n');


  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  process.exit(0);
};

seedAll();
