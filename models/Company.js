const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Company extends Model {}

Company.init(
  {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    po_number: {    //which is the id
      type: DataTypes.INTEGER,
      references: {
        model: 'po',
        key: 'po_number'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "company",
  }
);

module.exports = Company;
