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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
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

module.exports = User;