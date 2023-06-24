const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicles extends Model {}

//Models creating column criteria
Vehicles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        year: {
            type: DataTypes.INTEGER,
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
        bodyType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        highlights: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        review1: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        review2: {
            type: DataTypes.TEXT,
            allowNull: false, 
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'vehicles',
    }
);

module.exports = Vehicles;
