const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Brand = require("./Brand");
const Configuration = require("./Configuration");
const Product = require("./Product");
const Project = require("./Project");

Brand.initModel(sequelize);
Configuration.initModel(sequelize);
Product.initModel(sequelize);
Project.initModel(sequelize);


Brand.hasMany(Product);
Product.belongsTo(Brand, { foreignKey: 'brandId' });

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

module.exports = {
  sequelize,
  Brand,
  Configuration,
  Product,
  Project,
};
