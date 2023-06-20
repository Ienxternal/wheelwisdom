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

router.get('/search', async (req, res) => {
  try {
    const username = req.session.username;
    const { search } = req.query;
    const keywords = search.split(' ');

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
    console.log(username);
    console.log("3434343343434343434343434");
    console.log(username);
  } catch (error) {
    console.log(error);
    
    res.render('404', {
      loggedIn: req.session.loggedIn,
    });


    // res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/about', async (req, res) => {
  const username = req.session.username;
  res.render('about', {
    loggedIn: req.session.loggedIn,
  });
});
router.get('/profile', async (req, res) => {
  const username = req.session.username;
  res.render('profile', {
    loggedIn: req.session.loggedIn,
  });
});
router.get('/garage', async (req, res) => {
  const username = req.session.username;
  res.render('garage', {
    loggedIn: req.session.loggedIn,
  });
});
router.get('/features', async (req, res) => {
  const username = req.session.username;
  res.render('features', {
    loggedIn: req.session.loggedIn,
  });
});
router.get('/pricing', async (req, res) => {
  const username = req.session.username;
  res.render('pricing', {
    loggedIn: req.session.loggedIn,
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






// const router = require('express').Router();
// const { Vehicles } = require('../../models');

// router.get('/', async (req, res) => {
//   try {
//     const { search } = req.query;
//     let vehicles = [];

//     if (search) {
//       // Split the search input into individual values
//       const searchValues = search.split(' ');

//       // Build the query condition for Sequelize
//       const condition = {
//         [Op.and]: searchValues.map((value) => ({
//           [Op.or]: [
//             { model: { [Op.like]: %${value}% } },
//             { make: { [Op.like]: %${value}% } },
//             { year: { [Op.eq]: value } },
//           ],
//         })),
//       };

//       // Query the vehicles table based on the search condition
//       vehicles = await Vehicles.findAll({ where: condition });
//     }

//     res.render('homepage', {
//       loggedIn: req.session.loggedIn,
//       vehicles,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = router;






// const router = require('express').Router();
// const { User } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//   res.render('homepage', {
//     logged_in: req.session.logged_in,
//   });
// });

// router.get('/product', async (req, res) => {
//   res.render('product');
// });
// router.get('/about', async (req, res) => {
//   res.render('about');
// });
// router.get('/features', async (req, res) => {
//   res.render('features');
// });
// router.get('/pricing', async (req, res) => {
//   res.render('pricing');
// });

// router.get('/login', (req, res) => {
//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   res.render('signup');
// });

// // router.get('/', withAuth, async (req, res) => {
// //   try {
// //     const userData = await User.findAll({
// //       attributes: { exclude: ['password'] },
// //       order: [['name', 'ASC']],
// //     });

// //     const users = userData.map((project) => project.get({ plain: true }));

// //     res.render('homepage', {
// //       users,
// //       logged_in: req.session.logged_in,
// //     });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// //User registration

// /*router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });*/



// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// router.get('/login', (req, res) => {
//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   res.render('signup');
// });
// // router.post('/logout', (req, res) => {
// //   if (req.session.logged_in) {
// //     req.session.destroy(() => {
// //       res.status(204).end();
// //     });
// //   } else {
// //     res.status(404).end();
// //   }
// // });


// module.exports = router;


