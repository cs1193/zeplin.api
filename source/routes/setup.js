const express = require('express');
const SetupController = require('../controllers/setup');

const router = express.Router();

router.route('/')
  .get(SetupController.setupAdmin);

module.exports = router;
