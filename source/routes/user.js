const express = require('express');
const UserController = require('../controllers/user');
const isAuthenticated = require('../middleware/authentication');

const router = express.Router();

router.route('/')
  .get(isAuthenticated, UserController.getUsers)
  .post(isAuthenticated, UserController.createUser);

router.route('/:id')
  .get(isAuthenticated, UserController.getUserById)
  .put(isAuthenticated, UserController.updateUserById)
  .delete(isAuthenticated, UserController.removeUserById);


module.exports = router;
