const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/:id', projectController.getProject);
router.get('/', projectController.getProjects);
router.post('/', projectController.createProject);

module.exports = router;