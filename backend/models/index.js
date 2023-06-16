const User = require("./userModel");
const Project = require("./projectModel");
const Item = require("./itemModel");

User.hasMany(Project, { foreignKey: "checkUserId", as: "checkProjects" });
User.hasMany(Project, { foreignKey: "improveUserId", as: "improveProjects" });
Project.belongsTo(User, { foreignKey: "checkUserId", as: "checkUser" });
Project.belongsTo(User, { foreignKey: "improveUserId", as: "improveUser" });

module.exports = {
  User,
  Project,
  Item,
};
