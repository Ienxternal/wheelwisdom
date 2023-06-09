const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

//Models creating column criteria
Reviews.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    r_user: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    vehicle_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'vehicles',
            key: 'id',
        },
    },
    },
    {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
    }
);

module.exports = Reviews;
