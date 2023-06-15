const seedUsers = require('./seedUsers');
const seedVehicles = require('./seedVehicles');
const seedReviews = require('./seedReviews');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedVehicles();
  await seedReviews();
  process.exit(0);
};

seedAll();

