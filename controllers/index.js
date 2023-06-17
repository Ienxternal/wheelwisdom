const router = require('express').Router();

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');


router.use('/', homeRoutes);
router.use('/api/users', userRoutes);
router.use('/api/vehicle', vehicleRoutes);

module.exports = router;


