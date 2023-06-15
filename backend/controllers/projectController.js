const { User, Project } = require("../models");

const ProjectController = {
  async createProject(req, res) {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create project" });
    }
  },
  async getProjects(req, res) {
    try {
      const projects = await Project.findAll({
        include: [
          { model: User, as: "checkUser" },
          { model: User, as: "improveUser" },
        ],
      });
      res.json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  async getProject(req, res) {
    try {
      const project = await Project.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          { model: User, as: "checkUser" },
          { model: User, as: "improveUser" },
        ],
      });
      res.json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = ProjectController;
