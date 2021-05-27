const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PO extends Model {}

PO.init(
  {
    po_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [5],
      },
    },
    // emp_number: {
    //   type: DataTypes.STRING,
    //   references:{
    //     model: 'po',
    //     key: 'emp_number'
    //   }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "po",
  }
);

module.exports = PO;
