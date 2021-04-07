const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model{}

Users.init(
    {
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users'
    }
);

module.exports = Users;