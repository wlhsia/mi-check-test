// const User = require("../models/userModel");
// const Project = require("../models/projectModel");

const { User, Project } = require("../models");

const UserController = {
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create user" });
    }
  },

  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        include: [
          { model: Project, as: "checkProjects" },
          { model: Project, as: "improveProjects" },
        ],
      });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get users" });
    }
  },
};

module.exports = UserController;
