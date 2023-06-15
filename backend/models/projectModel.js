const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db");

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Project",
  }
);

module.exports = Project;
