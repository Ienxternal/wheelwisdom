const router = require('express').Router();
// Here is where we provide hardcoded data to render dynamically

//get all dishes
router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;
