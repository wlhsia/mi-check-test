const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./userModel');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Project;