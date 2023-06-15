const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./routes/homeRoutes');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);

module.exports = router;




/*const express = require('express');
const router = require('express').Router();
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const user = require('../models/User');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

router.use('/api/users', userRoutes);
router.use('/api/', homeRoutes);

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

module.exports = router;

/*const router = require('express').Router();
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');
const user = require('../../models/User');
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

router.use('/api/users', userRoutes);
router.use('/api/', homeRoutes);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

module.exports = router;*/
