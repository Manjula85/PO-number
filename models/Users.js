const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Users extends Model {
  // set up method to run on instance data (per user) to check password
  async checkPassword(loginPw) {
    await bcrypt.compare(loginPw, hash, (error, result) => {
      return result;
    });
  }
}

Users.init(
  {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
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
    modelName: "users",
  }
);

module.exports = Users;
