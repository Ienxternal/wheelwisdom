const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Vehicles = require('../../models/Vehicles');

router.get('/', async (req, res) => {
  const username = req.session.username;
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    username: username
  });
});

//Search route for search bars.
router.get('/search1', async (req, res) => {
  //If use is not logged in redirect to pricing page.
  if (!req.session.loggedIn) {
    res.redirect('/pricing');
  }
  else {
  try {
    const username = req.session.username;
    const { search } = req.query;
    const keywords = search.split(' ');

//Allows users to search all three criteria:Year, Make, Model
    const results = await Vehicles.findAll({
      where: {
        [Op.and]: keywords.map((keyword) => ({
          [Op.or]: [
            { year: keyword },
            { manufacturer: { [Op.like]: `%${keyword}%` } },
            { model: { [Op.like]: `%${keyword}%` } }
          ]
        }))
      }
    });
    const vehicleResults = results.map((vehicle) => vehicle.toJSON());
    res.render('product', {
      results: vehicleResults,
      loggedIn: req.session.loggedIn,
      vehicleId: vehicleResults[0].id,
      username: username
    });
  } catch (error) {
    console.log(error);
// If search yields no match bring using to 404 page.
    res.render('404', {
      loggedIn: req.session.loggedIn,
    });

  }
  }
});

// Routes for most of the pages. 
router.get('/about', async (req, res) => {
  const username = req.session.username;
  res.render('about', {
    loggedIn: req.session.loggedIn,
    username: username
  });
});
router.get('/profile', async (req, res) => {
  const username = req.session.username;
  res.render('profile', {
    loggedIn: req.session.loggedIn,
    username: username
  });
});
router.get('/garage', async (req, res) => {
  const username = req.session.username;
  res.render('garage', {
    loggedIn: req.session.loggedIn,
    username: username
  });
});
router.get('/features', async (req, res) => {
  const username = req.session.username;
  res.render('features', {
    loggedIn: req.session.loggedIn,
    username: username
  });
});
router.get('/pricing', async (req, res) => {
  const username = req.session.username;
  res.render('pricing', {
    loggedIn: req.session.loggedIn,
    username: username
  });
});
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
