const express = require('express');
const BoardController = require('../controllers/board');
const isAuthenticated = require('../middleware/authentication');

const router = express.Router();

router.post('/name', isAuthenticated, BoardController.getBoardByName)

module.exports = router;
