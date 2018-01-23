const express = require('express');
const AuthenticationController = require('../controllers/authentication');
const isAuthenticated = require('../middleware/authentication');

const router = express.Router();

router.post('/authenticate', AuthenticationController.authenticateUser);

module.exports = router;
