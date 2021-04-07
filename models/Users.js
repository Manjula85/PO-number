const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData;
                }

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users'
    }
);

module.exports = Users;