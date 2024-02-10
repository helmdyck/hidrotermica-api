const { Model, DataTypes } = require("sequelize");


class Brand extends Model {
  static initModel(sequelize) {
    Brand.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        logo: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "brand",
      },
    );
    return Brand;
  }
}

module.exports = Brand;
