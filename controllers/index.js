const router = require('express').Router();

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;





