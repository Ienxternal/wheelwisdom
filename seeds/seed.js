const sequelize = require('../config/connection');
const { User } = require('../models');
const { Vehicle } = require('../models');
const { Review } = require('../models');

const userData = require('./userData.json');
const vehicleData = require('./vehicle.json');
const reviewData = require('./reviews.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedVehicle();

  await seedReview();

  process.exit(0);
};

seedDatabase();
