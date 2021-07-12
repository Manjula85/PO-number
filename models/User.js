const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  //set up method to run on instance data (per user) to check password
  async checkPassword(loginPw) {
    await bcrypt.compare(loginPw, hash, (error, result) => {
      return result;
    });
  }
}

User.init(
  {
    emp_number: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [5],
      },
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
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        let salt = bcrypt.genSaltSync(8)
        await bcrypt.hash(newUserData.password, salt, (error, hash) => {
          return hash;
        });
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
