const User = require('./User');
const Vehicle = require('./Vehicles');
const Review = require('./Reviews');

User.hasMany(Review, {
    foreignKey: 'following_user_id',
    onDelete: 'CASCADE',
});

Vehicle.hasMany(Review, {
    foreignKey: 'reviewed_vehicle_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(User, {
    foreignKey: 'following_user_id',
});

Review.belongsTo(Vehicle, {
    foreignKey: 'reviewed_vehicle_id',
});

module.exports = {
    User,
    Vehicle,
    Review,
};
