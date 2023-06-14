const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Project = require('./projectModel');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  noteId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.hasMany(Project, { as: 'projects' });

module.exports = User;