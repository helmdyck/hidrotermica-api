const { Model, DataTypes } = require("sequelize");

class Project extends Model {
  static initModel(sequelize) {
    Project.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        image: {
          type: DataTypes.JSON,
        },
        description: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "project",
      },
    );

    return Project;
  }
}

module.exports = Project;
