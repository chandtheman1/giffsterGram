const { User } = require('../models/User');

const userData =[
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345",
      "group_id": 1,
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345",
      "group_id" : 2,
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345",
      "group_id" : 1,
    },
    {
      "name": "Jordan",
      "email": "jordan99@msn.com",
      "password": "password12345",
      "group_id" : 2,
    },
    {
      "name": "Blake",
      "email": "the_blake@yahoo.com",
      "password": "password12345",
      "group_id" : 2,
    }
  ];


  const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

  