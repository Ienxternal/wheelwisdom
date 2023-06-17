const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    review_content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    following_user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    reviewed_vehicle_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'vehicle',
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
