const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        brandId: {
          type: DataTypes.BIGINT.UNSIGNED,
        },
        description: {
          type: DataTypes.TEXT,
        },
        features: {
          type: DataTypes.TEXT,
        },
        image: {
          type: DataTypes.JSON,
        },
        highlight: {
          type: DataTypes.BOOLEAN,
        },
      },
      {
        sequelize,
        modelName: "product",
      },
    );

    return Product;
  }
}

module.exports = Product;
