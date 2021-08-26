// Import Dependencies
require('dotenv').config();

const express = require('express');
const app = express();

const sequelize = require('./config/connection');

// Import features
const { addTextToGIF } = require('./controllers/api/addTextToGif');

// Setup express variables
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish the router (TBD)
app.get('/', (req, res) => {
    res.send('Hello World')
  });

app.get('/controllers/api/addTextToGif', (req, res) => {
  res.send(addTextToGIF())
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});