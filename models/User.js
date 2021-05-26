const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init(
    {
        empNumber:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validate:{
                len: [5]
            }
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        First_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'po'
    }
);

module.exports = PO;