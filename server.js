const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 8080;

// Setup sessions
const sess = {
  secret: 'keyboard cat',
  store: new SequelizeStore({
    db: sequelize,
  }),
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
};

app.use(session(sess));

// Setup handlebars
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);





app.get('/', (req, res) => {
  res.render('homepage')
});

app.post('/controllers/api/addTextToGif', (req, res) => {
  res.send(addTextToGIF())
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
