const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Company extends Model {}

Company.init(
  {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
