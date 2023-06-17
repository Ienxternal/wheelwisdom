const sequelize = require('../config/connection');
const { User, Vehicles, Reviews } = require('../models'); //1.3 Adding Table
const userData = require('./userData.json');
const vehicle = require('./vehicle.json');
const reviews = require('./reviews.json'); //1.3 Adding Talble

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Vehicles.bulkCreate(vehicle, {
    individualHooks: true,
    returning: true,
  });
  await Reviews.bulkCreate(reviews, { //1.3 Adding Table
    individualHooks: true, 
    returning: true,
  });

  process.exit(0);
};
seedDatabase();
