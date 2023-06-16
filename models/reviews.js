const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Vehicle = require('./vehicle');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     vehicle_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
             model: "User",
        }
     }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Review',
  }
);
 Review.hasOne(User)
 Review.hasOne(Vehicle)

module.exports = Review;
