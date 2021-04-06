const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class PO extends Model{}

PO.init(
    {
        poNumber:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validate:{
                len: [5]
            }
        },
        company: {
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