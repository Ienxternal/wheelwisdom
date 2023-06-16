const sequelize = require('../config/connection');
const { User } = require('../models');
const { Vehicle } = require('../models');
const { Review } = require('../models');

const userData = require('./userData.json');
const vehicleData = require('./vehicle.json');
const reviewData = require('./reviews.json');

const seedDatabase = async () => {

  await User.bulkCreate(userData);
  await Vehicle.bulkCreate(vehicleData);
  await Review.bulkCreate(reviewData);


  await sequelize.sync({ force: false });

  process.exit(0);
};



seedDatabase();
