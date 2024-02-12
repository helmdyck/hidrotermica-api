const { Model, DataTypes } = require("sequelize");

class Configuration extends Model {
  static initModel(sequelize) {
    Configuration.init(
      {
        address: {
          type: DataTypes.TEXT,
        },
        description: {
          type: DataTypes.TEXT,
        },
        mobile: {
          type: DataTypes.STRING,
        },
        phone: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        linkedIn: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "configuration",
      },
    );
    return Configuration;
  }
}

module.exports = Configuration;
