const express = require('express');
const router = express.Router();

const authenticateToken = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

router.get('/current', authenticateToken, userController.getCurrentUser);
router.get('/', authenticateToken, userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;