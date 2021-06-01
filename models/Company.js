const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Company extends Model {}

Company.init(
  {
    company_name: {
      type: DataTypes.STRING,
      //allowNull: false,
      allowNull: false,
      defaultValue: "Guneratne.inc",
    },
    po_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    emp_number: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "emp_number",
      },
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
