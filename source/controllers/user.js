const User = require('../models/user');

function getUsers(req, res) {
  User.find({}, (error, users) => {
    if (error) return res.status(500).send(`There was a problem finding the users.`);
    res.status(200).send(users);
  });
}

function createUser(req, res) {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }, (error, user) => {
    if (error) return res.status(500).send(`There was a problem adding the information to the database.`);
    res.status(200).send(user);
  });
}

function getUserById(req, res) {
  User.findById(req.params.id, (error, user) => {
    if (error) return res.status(500).send(`There was a problem finding the user.`);
    if (!user) return res.status(404).send(`No user found.`);
    res.status(200).send(user);
  });
}

function removeUserById(req, res) {
  User.findByIdAndRemove(req.params.id, (error, user) => {
    if (error) return res.status(500).send(`There was a problem deleting the user.`);
    res.status(200).send(`User ${user} was deleted.`);
  });
}

function updateUserById(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, user) => {
    if (error) return res.status(500).send(`There was a problem updating the user.`);
    res.status(200).send(user);
  });
}

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  getUserById: getUserById,
  updateUserById: updateUserById,
  removeUserById: removeUserById
};
