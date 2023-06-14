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
  notesId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true, // 啟用自動管理 createdAt 和 updatedAt
});



// User.hasMany(Project, { as: 'projects' });

module.exports = User;