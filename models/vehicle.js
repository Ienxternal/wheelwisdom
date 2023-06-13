const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bodyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Vehicle',
  }
);

module.exports = Vehicle;
